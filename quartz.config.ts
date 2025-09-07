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
          light: "#ffffff",
          lightgray: "#f6f6f6",
          gray: "#ababab",
          darkgray: "#5c5c5c",
          dark: "#222222",
          secondary: "#529d52",
          tertiary: "#a5d6a7",
          highlight: "rgba(82, 157, 82, 0.15)",
          textHighlight: "#529d52b1",
        },
        darkMode: {
          light: "#000000",
          lightgray: "#242424",
          gray: "#666666",
          darkgray: "#b3b3b3",
          dark: "#dadada",
          secondary: "#529d52",
          tertiary: "#a5d6a7",
          highlight: "rgba(82, 157, 82, 0.15)",
          textHighlight: "#67c26769",
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
      Plugin.CustomOgImages(),
    ],
  },
}

export default config
