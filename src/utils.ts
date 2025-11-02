import {
  camelCase,
  capitalCase,
  constantCase,
  kebabCase,
  pascalCase,
  sentenceCase,
  snakeCase,
} from "change-case";

export type CaseType =
  | "camel"
  | "pascal"
  | "snake"
  | "kebab"
  | "constant"
  | "title"
  | "sentence"
  | "lower"
  | "upper";

export interface CaseOption {
  id: CaseType;
  title: string;
  icon: string;
  transform: (text: string) => string;
}

export const caseOptions: CaseOption[] = [
  {
    id: "camel",
    title: "camelCase",
    icon: "🐪",
    transform: camelCase,
  },
  {
    id: "pascal",
    title: "PascalCase",
    icon: "🅿️",
    transform: pascalCase,
  },
  {
    id: "snake",
    title: "snake_case",
    icon: "🐍",
    transform: snakeCase,
  },
  {
    id: "kebab",
    title: "kebab-case",
    icon: "�串",
    transform: kebabCase,
  },
  {
    id: "constant",
    title: "CONSTANT_CASE",
    icon: "🔒",
    transform: constantCase,
  },
  {
    id: "title",
    title: "Title Case",
    icon: "📰",
    transform: capitalCase,
  },
  {
    id: "sentence",
    title: "Sentence case",
    icon: "📝",
    transform: sentenceCase,
  },
  {
    id: "lower",
    title: "lowercase",
    icon: "🔽",
    transform: (text: string) => text.toLowerCase(),
  },
  {
    id: "upper",
    title: "UPPERCASE",
    icon: "🔼",
    transform: (text: string) => text.toUpperCase(),
  },
];

export function getCaseOption(id: CaseType): CaseOption | undefined {
  return caseOptions.find((option) => option.id === id);
}
