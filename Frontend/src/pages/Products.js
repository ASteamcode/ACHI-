// src/pages/Products.js
import React, { useEffect, useMemo } from "react"
import SEO from "../components/SEO"

const Products = () => {
  useEffect(() => {
    if (!document.querySelector('script[data-model-viewer="true"]')) {
      const s = document.createElement("script")
      s.type = "module"
      s.async = true
      s.src = "https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js"
      s.setAttribute("data-model-viewer", "true")
      document.body.appendChild(s)
    }
  }, [])

  useEffect(() => {
    const centerModels = () => {
      const modelViewers = document.querySelectorAll("model-viewer")
      modelViewers.forEach((viewer) => {
        const handleLoad = () => {
          try {
            viewer.cameraTarget = "0m 0m 0m"
            try {
              viewer.scale = "0.7 0.7 0.7"
            } catch (e) {
              if (viewer.model) {
                const model = viewer.model
                if (model.scale) {
                  model.scale.set(0.7, 0.7, 0.7)
                }
              }
            }
            if (typeof viewer.updateFraming === "function") {
              viewer.updateFraming()
            }
          } catch (error) {}
        }

        if (viewer.loaded) {
          setTimeout(handleLoad, 100)
        } else {
          viewer.addEventListener("load", handleLoad, { once: true })
        }
      })
    }

    const checkInterval = setInterval(() => {
      if (window.customElements?.get("model-viewer")) {
        clearInterval(checkInterval)
        setTimeout(centerModels, 300)
        setTimeout(centerModels, 1000)
      }
    }, 100)

    return () => clearInterval(checkInterval)
  }, [])

  useEffect(() => {
    const updateCanvasSizes = () => {
      requestAnimationFrame(() => {
        const modelViewers = document.querySelectorAll("model-viewer")
        modelViewers.forEach((viewer) => {
          const container = viewer.parentElement
          if (!container) return

          const article = container.closest("article")

          const containerRect = container.getBoundingClientRect()
          let containerWidth = containerRect.width || container.clientWidth || container.offsetWidth
          let containerHeight = containerRect.height || container.clientHeight || container.offsetHeight

          if (article) {
            const articleRect = article.getBoundingClientRect()
            const articleWidth = articleRect.width || article.clientWidth || article.offsetWidth
            containerWidth = articleWidth
            container.style.width = "100%"
            container.style.maxWidth = "none"
          }

          const containerComputedHeight = containerRect.height || container.clientHeight || container.offsetHeight
          if (containerComputedHeight > containerHeight) {
            containerHeight = containerComputedHeight
          }

          if (containerWidth > 0 && containerHeight > 0) {
            container.style.width = `${containerWidth}px`
            container.style.height = `${containerHeight}px`
            container.style.maxWidth = "none"
            container.style.maxHeight = "none"

            const viewerRect = viewer.getBoundingClientRect()
            let viewerWidth = viewerRect.width || viewer.clientWidth || viewer.offsetWidth
            let viewerHeight = viewerRect.height || viewer.clientHeight || viewer.offsetHeight

            viewer.style.width = `${containerWidth}px`
            viewer.style.height = `${containerHeight}px`
            viewer.style.maxWidth = "none"
            viewer.style.maxHeight = "none"

            viewerWidth = containerWidth
            viewerHeight = containerHeight

            const roundedWidth = Math.round(viewerWidth)
            const roundedHeight = Math.round(viewerHeight)

            if (viewer.shadowRoot) {
              const containerDiv = viewer.shadowRoot.querySelector("div.container")
              if (containerDiv) {
                containerDiv.style.width = `${roundedWidth}px`
                containerDiv.style.height = `${roundedHeight}px`
                containerDiv.style.maxWidth = "none"
                containerDiv.style.maxHeight = "none"
                containerDiv.style.margin = "0"
                containerDiv.style.padding = "0"
                containerDiv.style.position = "absolute"
                containerDiv.style.top = "0"
                containerDiv.style.left = "0"
                containerDiv.style.right = "0"
                containerDiv.style.bottom = "0"
                containerDiv.style.boxSizing = "border-box"

                const userInputDiv = containerDiv.querySelector("div.userInput.show") || containerDiv.querySelector("div.userInput")
                if (userInputDiv) {
                  userInputDiv.style.width = `${roundedWidth}px`
                  userInputDiv.style.height = `${roundedHeight}px`
                  userInputDiv.style.maxWidth = "none"
                  userInputDiv.style.maxHeight = "none"
                  userInputDiv.style.margin = "0"
                  userInputDiv.style.padding = "0"
                  userInputDiv.style.position = "absolute"
                  userInputDiv.style.top = "0"
                  userInputDiv.style.left = "0"
                  userInputDiv.style.right = "0"
                  userInputDiv.style.bottom = "0"
                  userInputDiv.style.boxSizing = "border-box"
                  userInputDiv.style.overflow = "visible"
                  userInputDiv.style.transform = "none"
                  userInputDiv.style.transformOrigin = "top left"
                }
              }
            }

            const canvas = viewer.shadowRoot?.querySelector("canvas") || viewer.querySelector("canvas")
            if (canvas) {
              canvas.style.width = `${roundedWidth}px`
              canvas.style.height = `${roundedHeight}px`
              canvas.style.maxWidth = "none"
              canvas.style.maxHeight = "none"
              canvas.style.position = "absolute"
              canvas.style.top = "0"
              canvas.style.left = "0"
              canvas.style.right = "auto"
              canvas.style.bottom = "auto"
              canvas.style.margin = "0"
              canvas.style.padding = "0"
              canvas.style.transform = "none"
              canvas.style.border = "none"
              canvas.style.outline = "none"

              canvas.setAttribute("width", roundedWidth.toString())
              canvas.setAttribute("height", roundedHeight.toString())

              if (canvas.width !== roundedWidth) {
                canvas.width = roundedWidth
              }
              if (canvas.height !== roundedHeight) {
                canvas.height = roundedHeight
              }
            }
          }
        })
      })
    }

    const timeouts = [
      setTimeout(updateCanvasSizes, 100),
      setTimeout(updateCanvasSizes, 500),
      setTimeout(updateCanvasSizes, 1000),
    ]

    let resizeTimeout
    const handleResize = () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = setTimeout(updateCanvasSizes, 100)
    }
    window.addEventListener("resize", handleResize)

    const resizeObservers = []
    const modelViewers = document.querySelectorAll("model-viewer")
    modelViewers.forEach((viewer) => {
      const container = viewer.parentElement
      if (container) {
        const containerObserver = new ResizeObserver(() => {
          updateCanvasSizes()
        })
        containerObserver.observe(container)
        resizeObservers.push(containerObserver)
      }

      const viewerObserver = new ResizeObserver(() => {
        updateCanvasSizes()
      })
      viewerObserver.observe(viewer)
      resizeObservers.push(viewerObserver)
    })

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1) {
            const viewers = node.nodeName === "MODEL-VIEWER" ? [node] : node.querySelectorAll?.("model-viewer") || []
            viewers.forEach((viewer) => {
              const container = viewer.parentElement
              if (container) {
                const containerObserver = new ResizeObserver(() => {
                  updateCanvasSizes()
                })
                containerObserver.observe(container)
                resizeObservers.push(containerObserver)
              }

              const viewerObserver = new ResizeObserver(() => {
                updateCanvasSizes()
              })
              viewerObserver.observe(viewer)
              resizeObservers.push(viewerObserver)
            })
          }
        })
      })
      setTimeout(updateCanvasSizes, 50)
    })
    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      timeouts.forEach(clearTimeout)
      clearTimeout(resizeTimeout)
      window.removeEventListener("resize", handleResize)
      resizeObservers.forEach((ro) => ro.disconnect())
      observer.disconnect()
    }
  }, [])

  const products = useMemo(
    () => [
      {
        type: "3d",
        title: "Double Coupler 3D Component",
        desc: "High-strength double coupler for connecting scaffold tubes at 90° with precise alignment.",
        model: "/assets/products/double_coupler.glb",
        badge: "3D VIEW",
        cameraOrbit: "0deg 70deg 120%",
        fieldOfView: "30deg",
        cameraTarget: "0m 0m 0m",
        specs: ["3D interactive model", "Ideal for tube and fitting systems", "Optimized for heavy-duty connections"],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "3d",
        title: "H Frame 3D Component",
        desc: "3D visualization of H frame scaffolding for façade and elevation works.",
        model: "/assets/products/h_frame.glb",
        badge: "3D VIEW",
        cameraOrbit: "0deg 70deg 120%",
        fieldOfView: "30deg",
        cameraTarget: "0m 0m 0m",
        specs: ["Quick-assembly frame geometry", "Stable vertical support", "Compatible with standard accessories"],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "3d",
        title: "Joint Coupler 3D Component",
        desc: "3D model of the joint coupler used to connect scaffold tubes end-to-end.",
        model: "/assets/products/joint_coupler.glb",
        badge: "3D VIEW",
        cameraOrbit: "0deg 70deg 120%",
        fieldOfView: "30deg",
        cameraTarget: "0m 0m 0m",
        specs: ["End-to-end tube connection", "Rigid alignment in elevation", "Ideal for extending ledgers and standards"],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "3d",
        title: "Half Coupler 3D Component",
        desc: "3D visualization of half coupler used for connecting scaffold tubes to accessories.",
        model: "/assets/products/half_coupler.glb",
        badge: "3D VIEW",
        cameraOrbit: "0deg 70deg 120%",
        fieldOfView: "30deg",
        cameraTarget: "0m 0m 0m",
        specs: ["Single jaw connection", "For beams, brackets and specials", "High tightening capacity"],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "3d",
        title: "Swivel Coupler 3D Component",
        desc: "3D model of swivel coupler for connecting tubes at variable angles.",
        model: "/assets/products/swivel_coupler.glb",
        badge: "3D VIEW",
        cameraOrbit: "0deg 70deg 120%",
        fieldOfView: "30deg",
        cameraTarget: "0m 0m 0m",
        specs: ["Flexible angle connections", "Perfect for bracing and ties", "High-strength forged body"],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "3d",
        title: "Stirrup Head 3D Component",
        desc: "3D model of a stirrup head used for shoring support and formwork applications where stable load transfer and safe positioning are required.",
        model: "/assets/products/stirrup_head.glb",
        badge: "3D VIEW",
        cameraOrbit: "0deg 70deg 120%",
        fieldOfView: "30deg",
        cameraTarget: "0m 0m 0m",
        specs: ["Shoring head accessory for props", "Supports beams and formwork elements", "Designed for stable positioning on site"],
        tags: ["Rotate", "Zoom", "Inspect"],
      },
      {
        type: "img",
        title: "Standard Frame Scaffolding",
        desc: "Modular steel frames for construction and maintenance work.",
        img: "/assets/products/Standard_Frame_Scaffolding.jpg",
        specs: ["Height per bay: up to 6 m", "Load class: up to 3", "Finish: painted / galvanized"],
      },
      {
        type: "img",
        title: "Ringlock System Scaffolding",
        desc: "Heavy-duty system scaffolding for high-rise structures.",
        img: "/assets/products/Ringlock_System_Scaffolding.png",
        specs: ["High load capacity", "Flexible geometry", "Ideal for multi-storey projects"],
      },
      {
        type: "img",
        title: "Suspended Scaffolding Platforms",
        desc: "Motorized and manual swing stages for façade works.",
        img: "/assets/products/Suspended_Scaffolding_Platforms.jpg",
        specs: ["Adjustable height", "Excellent for façades", "Safety guardrails included"],
      },
      {
        type: "img",
        title: "Adjustable Base Jacks",
        desc: "Precise leveling for uneven or sloped surfaces.",
        img: "/assets/products/Adjustable_Base_Jacks.jpg",
        specs: ["Diameter: 38–48 mm", "Adjustment: up to 600 mm", "Galvanized steel"],
      },
      {
        type: "img",
        title: "Steel Scaffold Planks",
        desc: "Anti-slip planks for working surfaces.",
        img: "/assets/products/Steel_Scaffold_Planks.jpg",
        specs: ["Lengths: 1.0 – 3.0 m", "Anti-slip surface", "Secure locking hooks"],
      },
      {
        type: "img",
        title: "Full Scaffolding Safety Kit",
        desc: "Complete safety protection equipment.",
        img: "/assets/products/Full_Scaffolding_Safety_Kit.png",
        specs: ["Harness and double lanyard", "Helmet and vest", "Gloves and safety shoes"],
      },
    ],
    []
  )

  return (
    <main className="bg-[#f5f7fb] text-[#1b3155]">
      <SEO
        title="Products | Scaffolding Equipment & Components | ACHI"
        description="Browse ACHI Scaffolding's comprehensive range of scaffolding equipment, components, and accessories. H frames, couplers, safety equipment, and more."
        canonical="https://achi-scaffolding.github.io/products"
      />
      <style>{`
        model-viewer {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          background: transparent !important;
          margin: 0 !important;
          padding: 0 !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          right: 0 !important;
          bottom: 0 !important;
          border: none !important;
          outline: none !important;
        }
        model-viewer canvas {
          display: block !important;
          margin: 0 !important;
          padding: 0 !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border: none !important;
          outline: none !important;
          box-sizing: border-box !important;
        }
        model-viewer::part(default-progress-bar) { display: none !important; }
        model-viewer::part(default-ar-button) { transform: scale(0.9); }

        model-viewer::part(controls) { display: none !important; }
        model-viewer::part(overlay) { display: none !important; }
        model-viewer::part(interaction-prompt) { display: none !important; }
      `}</style>

      <section className="py-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto text-center">
          <h1 className="text-[#214f9b] font-[900] uppercase text-[30px] md:text-[40px]">ALL PRODUCTS</h1>
          <p className="mt-[10px] text-[#4a5c7a] text-[14px] md:text-[15px] leading-[1.7] max-w-[820px] mx-auto">
            Discover our range of professional scaffolding systems, components, and safety equipment designed for reliable,
            secure, and efficient construction projects.
          </p>
        </div>
      </section>

      <section className="pb-[60px]">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[18px]">
            {products.map((p, idx) => (
              <article
                key={`${p.title}-${idx}`}
                className="group rounded-[16px] overflow-hidden flex flex-col bg-white shadow-[0_10px_30px_rgba(17,35,64,0.08)]"
              >
                <div className="relative overflow-hidden bg-white" style={{ width: "100%", minHeight: "380px" }}>
                  {p.type === "3d" ? (
                    <model-viewer
                      key={`${p.model}-${idx}-${p.cameraOrbit}-${p.cameraTarget}-${p.fieldOfView}`}
                      src={p.model}
                      alt={p.title}
                      camera-controls
                      auto-rotate
                      auto-rotate-delay="0"
                      rotation-per-second="28deg"
                      interaction-prompt="none"
                      shadow-intensity="1"
                      loading="eager"
                      camera-orbit={p.cameraOrbit || "0deg 70deg 60%"}
                      camera-target={p.cameraTarget || "0m 0m 0m"}
                      field-of-view={p.fieldOfView || "30deg"}
                      min-field-of-view="20deg"
                      max-field-of-view="60deg"
                      bounds="tight"
                      touch-action="pan-y"
                      ar-modes="webxr scene-viewer quick-look"
                      class="absolute inset-0 w-full h-full block"
                      style={{ margin: 0, padding: 0, top: 0, left: 0, right: 0, bottom: 0 }}
                    />
                  ) : (
                    <img
                      src={p.img}
                      alt={p.title}
                      className="absolute inset-0 w-full h-full object-contain block"
                      loading="lazy"
                    />
                  )}

                  <span className="absolute top-[12px] left-[12px] bg-[#214f9b] text-white text-[12px] font-[900] px-[10px] py-[6px] rounded-full z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ease-out">
                    {p.type === "3d" ? p.badge : "PRODUCT"}
                  </span>

                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className="absolute inset-x-0 bottom-0 p-[16px] md:p-[18px]
                                 bg-gradient-to-t from-black/80 via-black/35 to-transparent
                                 opacity-0 translate-y-[10px]
                                 group-hover:opacity-100 group-hover:translate-y-0
                                 transition-all duration-300 ease-out"
                    >
                      <div className="pointer-events-auto max-w-[92%]">
                        <p className="text-white text-[14px] leading-[1.7] mb-[12px]">{p.desc}</p>

                        <ul className="space-y-[6px] text-[13px] text-white">
                          {p.specs.map((s) => (
                            <li key={`${p.title}-${s}`} className="flex gap-[8px]">
                              <span className="mt-[6px] w-[6px] h-[6px] rounded-full bg-white" />
                              <span className="leading-[1.6]">{s}</span>
                            </li>
                          ))}
                        </ul>

                        {p.type === "img" && (
                          <a
                            href="#"
                            onClick={(e) => e.preventDefault()}
                            className="mt-[12px] inline-flex w-full justify-center rounded-[12px] px-[14px] py-[10px]
                                       border-2 border-white text-white font-[900] uppercase text-[13px]
                                       hover:bg-white hover:text-[#214f9b] transition-all"
                          >
                            Read More
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <h3 className="font-[900] text-[16px] text-center px-[10px] min-h-[56px] flex items-center justify-center">
                  {p.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[55px] bg-[#eef3fb]">
        <div className="w-[90%] max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-[18px]">
          <div className="text-center md:text-left">
            <h2 className="text-[#214f9b] font-[900] uppercase text-[22px] md:text-[28px]">Need a Quote for Your Next Project?</h2>
            <p className="mt-[8px] text-[#4a5c7a] text-[14px] leading-[1.7]">
              Share your project details and we’ll recommend the best system for your needs.
            </p>
          </div>

          <a
            href="https://wa.me/96103322811"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-[18px] py-[12px] rounded-[12px] bg-[#28509E] text-white font-[900] uppercase text-[13px] border-2 border-white hover:bg-[#25D366] hover:border-[#25D366] transition"
          >
            Send us your enquiry over WhatsApp
          </a>
        </div>
      </section>
    </main>
  )
}

export default Products
