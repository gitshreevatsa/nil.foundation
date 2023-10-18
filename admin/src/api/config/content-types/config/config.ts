// Interface automatically generated by schemas-to-ts

export interface Config {
  id: number
  attributes: {
    createdAt: Date
    updatedAt: Date
    publishedAt?: Date
    isGlossaryOn?: boolean
    isResearchTagsOn?: boolean
  }
}
export interface Config_Plain {
  id: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  isGlossaryOn?: boolean
  isResearchTagsOn?: boolean
}

export interface Config_NoRelations {
  id: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  isGlossaryOn?: boolean
  isResearchTagsOn?: boolean
}

export interface Config_AdminPanelLifeCycle {
  id: number
  createdAt: Date
  updatedAt: Date
  publishedAt?: Date
  isGlossaryOn?: boolean
  isResearchTagsOn?: boolean
}