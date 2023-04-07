import type { Model } from "./types"

export const defaultSetting = {
  continuousDialogue: false,
  archiveSession: false,
  openaiAPIKey: "",
  openaiAPITemperature: 60,
  password: "ourongxing",
  systemRule: "",
  model: "gpt-3.5-turbo" as Model
}

export const defaultMessage = `欢迎使用公众号「AI语言助手」!
<img src="https://7072-prod-3gczf0ik897a7508-1309259652.tcb.qcloud.la/chatkf.png" alt="图片描述" width="150" height="150">`

export type Setting = typeof defaultSetting

export const defaultResetContinuousDialogue = false

export const defaultMaxInputTokens: Record<Model, number> = {
  "gpt-3.5-turbo": 3072,
  "gpt-4": 6144,
  "gpt-4-32k": 24576
}

export const defaultModel: Model = "gpt-3.5-turbo"
