import { type LinkProps } from "next/link"
import type { HTMLAttributes, HTMLProps, ReactNode, SVGAttributes } from "react"

export type TGlobalProps = {
  readonly className?: string
  readonly children?: ReactNode
}

export type TClassName = {
  readonly className?: string
}

export type TChildren = {
  readonly children?: ReactNode
}

export type TParamsLocale = {
  readonly params: {
    readonly locale: string
  }
}

export type TIcons = SVGAttributes<SVGElement>

export type THTMLDivElement = HTMLDivElement
export type THTMLDivAttributes = HTMLAttributes<HTMLDivElement>

export type THTMLElement = HTMLElement
export type THTMLAttributes = HTMLAttributes<HTMLElement>

export type THTMLHeadingElement = HTMLHeadingElement
export type THTMLHeadingAttributes = HTMLAttributes<HTMLHeadingElement>

export type TLinksProps = LinkProps & HTMLProps<HTMLAnchorElement>
