export { cn } from "cn"
import axios from "redaxios"

import { parse } from "node-html-parser"

type OpenGraphItems = Record<string, string>

export const getOpenGraphData = (html: string) => {
  const items: OpenGraphItems = {}
  const root = parse(html)
  const metas = root.querySelectorAll("meta")
  const openGraphElements = metas.filter((element) => {
    return element.rawAttrs.includes('property="og')
  })
  openGraphElements.forEach((element) => {
    const property = element.getAttribute("property")?.match(/og:(.+)/)?.[1]
    if (property) {
      const content = element.getAttribute("content")
      if (content) {
        items[property] = content
      }
    }
  })
  return items
}

//  const ogData: OGData = {}
//      Cache  property: og:description
// project-card.tsx:41  Cache  content: NRK.no er Norges største tilbud på nett: nyheter fra Norge og verden, lokalnyheter, radio- og tv-program, podcast, vær, helse-, kultur-, underholdning-, humor- og debattstoff.
// project-card.tsx:40  Cache  property: og:url
// project-card.tsx:41  Cache  content: https://www.nrk.no/
// project-card.tsx:40  Cache  property: og:image
// project-card.tsx:41  Cache  content: https://gfx.nrk.no/6rWxze-UEH8NjeyoK-UJdA2vJydrRx-TDe1gvscbaUfw
// project-card.tsx:40  Cache  property: og:title
// project-card.tsx:41  Cache  content: NRK.no – nyheter, tv og radio fra Norge og hele verden
// project-card.tsx:40  Cache  property: og:type
// project-card.tsx:41  Cache  content: website
// project-card.tsx:40  Cache  property: og:locale
// project-card.tsx:41  Cache  content: nb_NO
// project-card.tsx:40  Cache  property: og:site_name
//   // project-card.tsx:41  Cache  content: NRK
//   const root = await parseSite(url)
//   if (root === "failed") {
//     return {}
//   }
//   const metas = root.querySelectorAll("meta")
//   const ogs = metas.filter((element) => {
//     return element.rawAttrs.includes('property="og')
//   })
//   console.log(ogs)
//   ogs.forEach((og) => {
//     const property = og.getAttribute("property")?.match(/og:(.+)/)?.[1]
//     if (property) {
//       ogData[property as keyof OGData] = og.getAttribute("content")
//     }
//   })
//   return ogData
// }

// export default getOGData

// export { type OGData }
