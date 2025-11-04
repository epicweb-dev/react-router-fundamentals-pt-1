<div>
  <h1 align="center"><a href="https://www.epicweb.dev/workshops">React Router Fundamentals part 1 ⛓️</a></h1>
  <strong>
    First part of the react-router fundamentals workshop. We go over everything you need to know about data reading and display.
  </strong>
     
  
</div>
    This workshop focuses on
    data loading and display. It is designed to teach you the core concepts of
    react-router v7 in a hands-on, project-based way.

    We will learn how to build an e-commerce app from scratch using react-router
    v7. Along the way, we will cover topics such as:
    - Setting up a react-router v7 project
    - Creating routes and nested routes
    - Loading data with loaders
    - Displaying data with components
    - Handling loading states
    - Using fetchers to fetch data
    - Sorting, filtering, and paginating data
    - Progressive enhancement and accessibility

    By the end of this workshop, you will have a solid understanding of how to
    use react-router v7 to build data-driven applications. You will also have a
    working e-commerce app that you can use as a starting point for your own
    projects.
 
    This workshop assumes you have a basic understanding of React and
    JavaScript. No prior knowledge of react-router is required.

<hr />

<div align="center">
  <a
    alt="Epic Web logo with the words Deployed Version"
    href="https://epicweb-dev-react-router-fundamentals-pt-1.fly.dev/"
  >
    <img
      width="300px"
      src="https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/254000390-447a3559-e7b9-4918-947a-1b326d239771.png"
    />
  </a>
</div>

<hr />

<!-- prettier-ignore-start -->
[![Build Status][build-badge]][build]
[![GPL 3.0 License][license-badge]][license]
[![Code of Conduct][coc-badge]][coc]
<!-- prettier-ignore-end -->

## Prerequisites

- React knowledge
- Some JavaScript experience
- Basic understanding of TypeScript (types, interfaces, etc)
- Basic understanding of HTML & CSS
- Basic understanding of web development (HTTP, APIs, etc)
- Basic understanding of command line usage
- Basic understanding of server/client architecture
- NO react-router knowledge is needed!

## Pre-workshop Resources

Here are some resources you can read before taking the workshop to get you up to
speed on some of the tools and concepts we'll be covering:

- https://react.dev/blog/2024/12/05/react-19 (React 19 blog post)
- https://react.dev/learn (React official docs - learn section)
- https://reactrouter.com/home (React Router official docs)
- https://www.typescriptlang.org/docs/handbook/2/basic-types.html (TypeScript basic types docs)

Useful to go through if you want to get a head start on the workshop:
- https://v2.remix.run/docs/discussion/introduction (Remix introduction docs, keep in mind that react-router v7 framework mode is a continuation of Remix v2)
- https://v2.remix.run/docs/discussion/progressive-enhancement (Progressive enhancement in Remix, also applicable to react-router v7 framework mode)
- https://developer.mozilla.org/en-US/ (this is your best friend for web development, check out anything you don't understand here)

## System Requirements

- [git][git] v2.18 or greater
- [NodeJS][node] v18 or greater
- [npm][npm] v8 or greater

All of these must be available in your `PATH`. To verify things are set up
properly, you can run this:

```shell
git --version
node --version
npm --version
```

If you have trouble with any of these, learn more about the PATH environment
variable and how to fix it here for [windows][win-path] or
[mac/linux][mac-path].

## Setup

This is a pretty large project (it's actually many apps in one) so it can take
several minutes to get everything set up the first time. Please have a strong
network connection before running the setup and grab a snack.

> **Warning**: This repo is _very_ large. Make sure you have a good internet
> connection before you start the setup process. The instructions below use
> `--depth` to limit the amount you download, but if you have a slow connection,
> or you pay for bandwidth, you may want to find a place with a better
> connection.

Follow these steps to get this set up:

```sh nonumber
git clone --depth 1 https://github.com/epicweb-dev/react-router-fundamentals-pt-1.git
cd react-router-fundamentals-pt-1
npm run setup
```

If you experience errors here, please open [an issue][issue] with as many
details as you can offer.

## The Workshop App

Learn all about the workshop app on the
[Epic Web Getting Started Guide](https://www.epicweb.dev/get-started).

[![Kent with the workshop app in the background](https://github-production-user-asset-6210df.s3.amazonaws.com/1500684/280407082-0e012138-e01d-45d5-abf2-86ffe5d03c69.png)](https://www.epicweb.dev/get-started)

<!-- prettier-ignore-start -->
[npm]: https://www.npmjs.com/
[node]: https://nodejs.org
[git]: https://git-scm.com/
[build-badge]: https://img.shields.io/github/actions/workflow/status/epicweb-dev/react-router-fundamentals-pt-1/validate.yml?branch=main&logo=github&style=flat-square
[build]: https://github.com/epicweb-dev/react-router-fundamentals-pt-1/actions?query=workflow%3Avalidate
[license-badge]: https://img.shields.io/badge/license-GPL%203.0%20License-blue.svg?style=flat-square
[license]: https://github.com/epicweb-dev/react-router-fundamentals-pt-1/blob/main/LICENSE
[coc-badge]: https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square
[coc]: https://kentcdodds.com/conduct
[win-path]: https://www.howtogeek.com/118594/how-to-edit-your-system-path-for-easy-command-line-access/
[mac-path]: http://stackoverflow.com/a/24322978/971592
[issue]: https://github.com/epicweb-dev/react-router-fundamentals-pt-1/issues/new
<!-- prettier-ignore-end -->
