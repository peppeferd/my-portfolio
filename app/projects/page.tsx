import React from 'react'

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 to-green-600 min-h-screen text-3xl pt-36">
      <h1 className="mx-auto p-4 bg-blue-600 text-white max-w-fit mb-9 rounded-full">
        Some of my projects
      </h1>
      <div className="">
        <h1 className="bg-blue-600 w-fit text-white p-3 rounded-md ml-2">
          Full Stack Ecommerce:
        </h1>
        <a
          className="underline"
          target="_blank"
          href="https://laboutiquescarpeaccessori.com"
        >
          <h1 className="m-3">La Boutique Scarpe e Accessori</h1>
        </a>
      </div>
      <div className="mt-10">
        <h1 className="bg-blue-600 w-fit text-white p-3 rounded-md ml-2">
          AI Projects:
        </h1>
        <a
          className="underline"
          target="_blank"
          href="https://ai-blogposter-gamma.vercel.app/"
        >
          <h1 className="m-3">AI Blog Writer</h1>
        </a>
        <a
          className="underline"
          target="_blank"
          href="https://ai-image-generator-seven-beige.vercel.app/"
        >
          <h1 className="m-3">AI Image Creator</h1>
        </a>
      </div>
      <div className="mt-10">
        <h1 className="bg-blue-600 w-fit text-white p-3 rounded-md ml-2">
          Donation web app:
        </h1>
        <a
          className="underline"
          target="_blank"
          href="https://isaiahorphanagecenter.com"
        >
          <h1 className="m-3">Isaiah Orphanage Center</h1>
        </a>
      </div>
    </div>
  )
}

export default Projects
