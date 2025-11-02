import {
  Action,
  ActionPanel,
  Clipboard,
  getPreferenceValues,
  getSelectedText,
  Icon,
  List,
  showHUD,
  showToast,
  Toast,
} from "@raycast/api";
import * as React from "react";
import { caseOptions, CaseType, getCaseOption } from "./utils";

interface Preferences {
  outputMode: "paste" | "clipboard";
  defaultCase: CaseType;
}

export default function Command() {
  const [inputText, setInputText] = React.useState<string>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const preferences = getPreferenceValues<Preferences>();

  React.useEffect(() => {
    async function fetchInput() {
      try {
        // Try to get selected text from the frontmost application
        let text = "";

        try {
          const selectedText = await getSelectedText();
          if (selectedText && selectedText.trim().length > 0) {
            text = selectedText;
          }
        } catch (error) {
          // If getSelectedText fails, try clipboard
          const clipboardText = await Clipboard.readText();
          if (clipboardText && clipboardText.trim().length > 0) {
            text = clipboardText;
          }
        }

        setInputText(text);
      } catch (error) {
        console.error("Error reading input:", error);
        await showToast({
          style: Toast.Style.Failure,
          title: "Failed to read input",
          message: "Could not read selected text or clipboard content",
        });
      } finally {
        setIsLoading(false);
      }
    }

    fetchInput();
  }, []);

  async function handleConvert(caseType: CaseType) {
    if (!inputText || inputText.trim().length === 0) {
      await showToast({
        style: Toast.Style.Failure,
        title: "No input text",
        message: "Please select text or copy something to clipboard first",
      });
      return;
    }

    const caseOption = getCaseOption(caseType);
    if (!caseOption) {
      await showToast({
        style: Toast.Style.Failure,
        title: "Invalid case type",
      });
      return;
    }

    try {
      const convertedText = caseOption.transform(inputText);

      if (preferences.outputMode === "paste") {
        // Try to paste the converted text
        try {
          await Clipboard.paste(convertedText);
          await showHUD(`✅ Pasted as ${caseOption.title}`);
        } catch (pasteError) {
          // If paste fails (e.g., in secure input fields), fallback to clipboard
          await Clipboard.copy(convertedText);
          await showHUD(`📋 Copied as ${caseOption.title} (paste not allowed)`);
        }
      } else {
        // Copy to clipboard mode
        await Clipboard.copy(convertedText);
        await showHUD(`📋 Copied as ${caseOption.title}`);
      }
    } catch (error) {
      console.error("Error converting text:", error);
      await showToast({
        style: Toast.Style.Failure,
        title: "Conversion failed",
        message: error instanceof Error ? error.message : "Unknown error",
      });
    }
  }

  return (
    <List isLoading={isLoading} searchBarPlaceholder="Select a case type...">
      <List.Section
        title="Input Text"
        subtitle={
          inputText
            ? `"${inputText.substring(0, 50)}${inputText.length > 50 ? "..." : ""}"`
            : "No input"
        }
      >
        {caseOptions.map((caseOption) => {
          const preview = inputText ? caseOption.transform(inputText) : "";

          return (
            <List.Item
              key={caseOption.id}
              icon={caseOption.icon}
              title={caseOption.title}
              subtitle={preview ? `→ ${preview}` : ""}
              accessories={[
                {
                  text:
                    caseOption.id === preferences.defaultCase ? "Default" : "",
                },
              ]}
              actions={
                <ActionPanel>
                  <Action
                    title={
                      preferences.outputMode === "paste"
                        ? "Convert and Paste"
                        : "Convert and Copy"
                    }
                    icon={
                      preferences.outputMode === "paste"
                        ? Icon.Clipboard
                        : Icon.CopyClipboard
                    }
                    onAction={() => handleConvert(caseOption.id)}
                  />
                  <Action.CopyToClipboard
                    title="Copy Result"
                    content={preview}
                    shortcut={{ modifiers: ["cmd"], key: "c" }}
                  />
                </ActionPanel>
              }
            />
          );
        })}
      </List.Section>
    </List>
  );
}
