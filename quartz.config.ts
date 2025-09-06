import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🥝 얄리얄리얄랑셩",
    pageTitleSuffix: " - 멀위랑다래랑",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "ko-KR",
    baseUrl: "quartz.jzhao.xyz",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Nanum Gothic",
        body: "Nanum Gothic",
        code: "D2 Coding",
      },
      colors: {
        lightMode: {
          light: "#e8f5e9",
          lightgray: "#c8e6c9",
          gray: "#81c784",
          darkgray: "#388e3c",
          dark: "#1b5e20",
          secondary: "#4caf50",
          tertiary: "#a5d6a7",
          highlight: "rgba(76, 175, 80, 0.15)",
          textHighlight: "#a5d6a788",
        },
        darkMode: {
          light: "#1b5e20",
          lightgray: "#388e3c",
          gray: "#81c784",
          darkgray: "#c8e6c9",
          dark: "#e8f5e9",
          secondary: "#4caf50",
          tertiary: "#a5d6a7",
          highlight: "rgba(76, 175, 80, 0.15)",
          textHighlight: "#a5d6a788",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
      // Comment out CustomOgImages to speed up build time
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
