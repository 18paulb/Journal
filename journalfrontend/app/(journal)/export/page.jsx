// "use client";

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useState, useEffect } from "react";
// import html2pdf from "html2pdf.js";

// const themes = [
//   {
//     id: "minimal",
//     name: "Minimal",
//     description: "Clean and simple design with plenty of whitespace",
//   },
//   {
//     id: "classic",
//     name: "Classic",
//     description: "Traditional journal style with serif fonts",
//   },
//   {
//     id: "modern",
//     name: "Modern",
//     description: "Contemporary design with bold headings",
//   },
//   {
//     id: "vintage",
//     name: "Vintage",
//     description: "Nostalgic design with decorative elements",
//   },
// ];

// const fonts = [
//   { id: "inter", name: "Inter" },
//   { id: "georgia", name: "Georgia" },
//   { id: "merriweather", name: "Merriweather" },
//   { id: "roboto", name: "Roboto" },
// ];

// export default function ExportPage() {
//   const [isLoading, setIsLoading] = useState(false);

//   const [options, setOptions] = useState({
//     theme: "minimal",
//     font: "inter",
//     orientation: "portrait",
//     spacing: "comfortable",
//   });

//   const handleExport = async () => {
//   };

//   return (
//     <div className="container mx-auto px-4 py-12 max-w-3xl">
//       <Card className="p-6">
//         <div className="space-y-8">
//           <div>
//             <h1 className="text-2xl font-bold">Export Journal</h1>
//             <p className="text-muted-foreground mt-2">
//               Customize how your journal entries will look in the exported PDF.
//             </p>
//           </div>

//           <div className="space-y-6">
//             {/* Theme Selection */}
//             <div className="space-y-4">
//               <Label className="text-base">Choose a Theme</Label>
//               <RadioGroup
//                 defaultValue={options.theme}
//                 onValueChange={(value) =>
//                   setOptions({ ...options, theme: value })
//                 }
//                 className="grid grid-cols-2 gap-4"
//               >
//                 {themes.map((theme) => (
//                   <Label
//                     key={theme.id}
//                     htmlFor={theme.id}
//                     className="cursor-pointer"
//                   >
//                     <div className="flex items-center space-x-2">
//                       <RadioGroupItem value={theme.id} id={theme.id} />
//                       <div>
//                         <p className="font-medium">{theme.name}</p>
//                         <p className="text-sm text-muted-foreground">
//                           {theme.description}
//                         </p>
//                       </div>
//                     </div>
//                   </Label>
//                 ))}
//               </RadioGroup>
//             </div>

//             {/* Font Selection */}
//             <div className="space-y-4">
//               <Label htmlFor="font-select">Font</Label>
//               <Select
//                 value={options.font}
//                 onValueChange={(value) =>
//                   setOptions({ ...options, font: value })
//                 }
//               >
//                 <SelectTrigger id="font-select">
//                   <SelectValue placeholder="Select a font" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   {fonts.map((font) => (
//                     <SelectItem key={font.id} value={font.id}>
//                       {font.name}
//                     </SelectItem>
//                   ))}
//                 </SelectContent>
//               </Select>
//             </div>

//             {/* Page Orientation */}
//             <div className="space-y-4">
//               <Label>Page Orientation</Label>
//               <RadioGroup
//                 defaultValue={options.orientation}
//                 onValueChange={(value) =>
//                   setOptions({ ...options, orientation: value })
//                 }
//                 className="flex space-x-4"
//               >
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="portrait" id="portrait" />
//                   <Label htmlFor="portrait">Portrait</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="landscape" id="landscape" />
//                   <Label htmlFor="landscape">Landscape</Label>
//                 </div>
//               </RadioGroup>
//             </div>

//             {/* Line Spacing */}
//             <div className="space-y-4">
//               <Label>Line Spacing</Label>
//               <RadioGroup
//                 defaultValue={options.spacing}
//                 onValueChange={(value) =>
//                   setOptions({ ...options, spacing: value })
//                 }
//                 className="flex space-x-4"
//               >
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="compact" id="compact" />
//                   <Label htmlFor="compact">Compact</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="comfortable" id="comfortable" />
//                   <Label htmlFor="comfortable">Comfortable</Label>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <RadioGroupItem value="spacious" id="spacious" />
//                   <Label htmlFor="spacious">Spacious</Label>
//                 </div>
//               </RadioGroup>
//             </div>
//           </div>

//           <Button
//             onClick={handleExport}
//             disabled={isLoading}
//             className="w-full md:w-auto"
//           >
//             {isLoading ? "Generating PDF..." : "Download PDF"}
//           </Button>
//         </div>
//       </Card>
//     </div>
//   );
// }

import UnderDevelopment from '@/app/(error)/development/page';

export default function ExportPage() {
  return <UnderDevelopment></UnderDevelopment>;
}
