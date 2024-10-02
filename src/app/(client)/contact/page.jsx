"use client"
import React from 'react'

import { FacebookProvider, CustomChat } from "react-facebook";

const page = () => {
  return (
    <div>
    <FacebookProvider
          appId="842624008042233"
          chatSupport
        >
          <CustomChat
            pageId="143681285491763"
            minimized={true}
          />
        </FacebookProvider>
      this is contact
    </div>
  )
}

export default page
