Last worked on https://nextjs.org/learn/foundations/from-react-to-nextjs/next-steps
# Next with Node
## index.html
    - you don't need react and react-dom scripts since they are installed with NPM
    - no <html> or <body> tag
    - Next has a compiler - so no babel script
     - also no <script type="text/jsx">\
     - finally React.useState(0) becomes useState(0)
     - so now it looks like a JavaScript file ... add:
      import { useState } from "react" // to the top.


## Run Next server
to run Next.js development server 
  // package.json
    {
        "scripts": {
            "dev": "next dev"
    },

    $npm run dev // navigate to localhost:3000
    
    // it automatically refreshes (Fast Refresh)
