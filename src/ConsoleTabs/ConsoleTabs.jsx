import { useEffect, useState } from "react"
import './ConsoleTabs.css'
import { resourceTypes } from './data.jsx'
import { LuInfo } from "react-icons/lu"
import { IoCloseOutline } from "react-icons/io5"

export function Dashboard() {

    useEffect(() => {
        document.title = 'rive | Console'
    })


    return (
        <div className='ConsoleTabs'>
            <h1 className='ConsoleTabs-title'>Console</h1>
            <div className='Dashboard-container-row'>
                <div className='Dashboard-container-one'>
                    <h3 className='Dashboard-container-header'>Latest projects</h3>
                </div>

                <div className='Dashboard-container-two'>
                    <h3 className='Dashboard-container-header'>Untitled</h3>
                </div>
            </div>
            <div className='Dashboard-container-row'>
                <div className='Dashboard-container-three'>
                    <h3 className='Dashboard-container-header'>Recent searches</h3>
                </div>
            </div>
        </div>
    )
}

export function NewSearch() {

    const [infoOverlay, showInfoOverlay] = useState(false);


    useEffect(() => {

    })


    return (
        <div className='ConsoleTabs'>
            {infoOverlay && <OverlayInformation showInfoOverlay={showInfoOverlay} />}
            <h1 className='ConsoleTabs-title'>Start a new search</h1>
            <div className='NewSearch-separator' />
            <div className='NewSearch-container'>
                <label className='NewSearch-label'>Prompt</label>
                <textarea className='NewSearch-input'
                    placeholder='Enter the prompt of information you wish to research - the more specific your prompt, the more precise the ressources.'
                />
            </div>

            <div className='NewSearch-container'>
                <label className='NewSearch-label'>Resource type
                    <LuInfo className='NewSearch-label-icon' onClick={() => showInfoOverlay(true)} />
                </label>
                <div className='NewSearch-tags-container'>
                    {resourceTypes.map((r) => (
                        <label className="NewSearch-tag" key={r.name}>
                            {r.icon}
                            <label className='NewSearch-checkmark-label'>{r.name}</label>
                            <input type="checkbox" className="NewSearch-checkmark" />
                        </label>
                    ))}


                </div>
            </div>
        </div>
    )
}

function OverlayInformation(props) {
    return (
        <div className='Overlay'>
            <div className='Overlay-container'>
                <IoCloseOutline className='Overlay-close-icon' onClick={() => props.showInfoOverlay(false)} />
                <h2 className='Overlay-title'>Understanding resource types</h2>
                <p className='Overlay-p'>
                    <span className='Overlay-underlined'>Vetted resources</span>
                    <br />Vetted data comes with a certain guarantee of authenticity, meaning the AI has done due diligence on the origin and source of the resource provided.
                    <br />With vetted resources, you have a high likelihood ({'>'} 90%) of obtaining relevant resources you can trust.
                    <br /> <span className='Overlay-i'>Note: since the guarantee of authenticity is not full-proof, researchers are invited to always vet their sources themselves.</span>
                    <br /><br />
                    <span className='Overlay-underlined'>Can you still trust un-vetted resources?</span>
                    <br />Yes. Un-vetted data does not necessarily mean it's not trustworthy, it simply means the AI cannot guarantee an acceptable level of due diligence.
                    <br /> This can sometimes just be a case of poorly labeled documentation or uncertain AI parsing.
                </p>

            </div>
        </div>
    )
}