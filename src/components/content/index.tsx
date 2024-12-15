import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import type {
  THTMLAttributes,
  THTMLDivAttributes,
  THTMLDivElement,
  THTMLElement,
  THTMLHeadingAttributes,
  THTMLHeadingElement,
} from '@/types';

const Layout = forwardRef<THTMLElement, THTMLAttributes>(
  ({ className, ...rest }, ref) => (
    <main
      ref={ref}
      className={cn(
        'relative [&>section]:pt-20 last:[&>section]:pb-20',
        className
      )}
      {...rest}
    />
  )
);

const SeoTitle = forwardRef<THTMLHeadingElement, THTMLHeadingAttributes>(
  ({ className, ...rest }, ref) => (
    <h1
      ref={ref}
      className={cn('mb-4 text-3xl font-normal', className)}
      {...rest}
    />
  )
);

const Nav = forwardRef<THTMLElement, THTMLAttributes>(
  ({ className, ...rest }, ref) => (
    <nav ref={ref} className={className} {...rest} />
  )
);

const Header = forwardRef<THTMLElement, THTMLAttributes>(
  ({ className, ...rest }, ref) => (
    <header ref={ref} className={className} {...rest} />
  )
);

const Figure = forwardRef<THTMLElement, THTMLAttributes>(
  ({ className, ...rest }, ref) => (
    <figure ref={ref} className={className} {...rest} />
  )
);

const Aside = forwardRef<THTMLElement, THTMLAttributes>(
  ({ className, ...rest }, ref) => (
    <aside ref={ref} className={className} {...rest} />
  )
);

const Article = forwardRef<THTMLElement, THTMLAttributes>(
  ({ className, ...rest }, ref) => (
    <article ref={ref} className={className} {...rest} />
  )
);

const Section = forwardRef<THTMLElement, THTMLAttributes>(
  ({ className, ...rest }, ref) => (
    <section ref={ref} className={cn('section', className)} {...rest} />
  )
);

const Overlay = forwardRef<THTMLDivElement, THTMLDivAttributes>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={className} {...rest} />
  )
);

const Wrapper = forwardRef<THTMLDivElement, THTMLDivAttributes>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={className} {...rest} />
  )
);

const ContainerFluid = forwardRef<THTMLDivElement, THTMLDivAttributes>(
  ({ className, ...rest }, ref) => (
    <div
      ref={ref}
      className={cn('container max-w-full', className)}
      {...rest}
    />
  )
);

const Container = forwardRef<THTMLDivElement, THTMLDivAttributes>(
  ({ className, ...rest }, ref) => (
    <div ref={ref} className={cn('container', className)} {...rest} />
  )
);

Layout.displayName = 'LayoutElement';
SeoTitle.displayName = 'SeoTitleElement';
Nav.displayName = 'NavElement';
Header.displayName = 'HeaderElement';
Figure.displayName = 'FigureElement';
Aside.displayName = 'AsideElement';
Article.displayName = 'ArticleElement';
Section.displayName = 'SectionElement';
Overlay.displayName = 'OverlayElement';
Wrapper.displayName = 'WrapperElement';
ContainerFluid.displayName = 'ContainerFluidElement';
Container.displayName = 'ContainerElement';

export {
  Article,
  Aside,
  Container,
  ContainerFluid,
  Figure,
  Header,
  Layout,
  Nav,
  Overlay,
  Section,
  SeoTitle,
  Wrapper,
};
