import { useEffect, useState } from "react"
import './ConsoleTabs.css'
import { projectColours, projectTypes, resourceTypes } from './data.jsx'
import { LuInfo } from "react-icons/lu"
import { IoCloseOutline } from "react-icons/io5"
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill } from "react-icons/pi"
import { FaSearch } from "react-icons/fa"
import { toggleTheme } from "../HelperFunctions.jsx"

export function Dashboard() {

    useEffect(() => {
        document.title = 'rive | Console'
    })


    return (
        <div className='ConsoleTabs'>
            <h1 className='ConsoleTabs-title'>Console</h1>
            <div className='Dashboard-container-row'>
                <div className='Dashboard-container-one'>
                    <h3 className='Dashboard-container-header'>Recent searches</h3>
                    <div className='Dashboard-inner-container'>
                        <span className='Dashboard-inner-container-empty-text'>No recent searches to display.</span>
                    </div>
                </div>

                <div className='Dashboard-container-two'>
                    <h3 className='Dashboard-container-header'>Latest projects</h3>
                    <div className='Dashboard-inner-container'>
                        <span className='Dashboard-inner-container-empty-text'>No saved projects found.</span>
                    </div>
                </div>
            </div>
            <div className='Dashboard-container-row'>
                <div className='Dashboard-container-three'>
                    <h3 className='Dashboard-container-header'>Bookmarked resources</h3>
                    <div className='Dashboard-inner-container'>
                        <span className='Dashboard-inner-container-empty-text'>No resources bookmarked.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export function NewSearch() {

    const [infoOverlay, showInfoOverlay] = useState(false);
    const [tagArray, setTagArray] = useState(resourceTypes);

    useEffect(() => {

    })


    return (
        <div className='ConsoleTabs'>

            {infoOverlay && <OverlayInformation showInfoOverlay={showInfoOverlay} />}

            <div className='NewSearch-top-container'>
                <div className='NewSearch-container'>
                    <label className='NewSearch-label'>What are you looking for?</label>
                    <textarea className='NewSearch-input'
                        placeholder='Enter the prompt of resources you wish to research - the more specific your prompt, the more precise the resources.'
                    />
                </div>

                <div className='NewSearch-container'>
                    <label className='NewSearch-label'>Resource categories

                    </label>

                    <div className='NewSearch-tags-container'>
                        {tagArray.map((r, i) => (
                            <div
                                key={i} className={r.active ? 'NewSearch-tag tag-active' : 'NewSearch-tag'}
                                onClick={() => {
                                    setTagArray(prev =>
                                        prev.map((item, idx) =>
                                            idx === i ? { ...item, active: !item.active } : item
                                        )
                                    );
                                }}>
                                {r.icon}
                                <label className='NewSearch-checkmark-label'>{r.name}</label>
                            </div>
                        ))}
                    </div>
                    <div className='NewSearch-separator' />
                    <label className='NewSearch-label'> Select vetting mode<LuInfo className='NewSearch-label-icon' onClick={() => showInfoOverlay(true)} /></label>
                    <select className='NewSearch-dropdown' name='search-options' >
                        <option>Vetted resources only</option>
                        <option>Un-vetted resources only</option>
                        <option>All resources</option>
                    </select>
                </div>
                <button className='NewSearch-submit'><FaSearch /></button>
            </div>
        </div>
    )
}


export function NewProject() {

    const [tagArray, setTagArray] = useState(projectTypes);
    const [projectColoursArray, setProjectColoursArray] = useState(projectColours);

    return (
        <div className='ConsoleTabs'>

            <div className='NewProject-top-container'>

                <div className='NewProject-container'>
                    <label className='NewProject-label'>Project name</label>
                    <input className='NewProject-input'
                        placeholder='Ex: Microbiology PhD research'
                    />
                </div>

                <div className='NewProject-container'>
                    <label className='NewProject-label'>What is the project about ?</label>
                    <div className='NewProject-tags-container'>
                        {tagArray.map((r, i) => (
                            <div
                                key={i}
                                className={r.active ? 'NewProject-tag tag-active' : 'NewProject-tag'}
                                onClick={() => {
                                    setTagArray(prev =>
                                        prev.map((item, idx) => ({
                                            ...item,
                                            active: idx === i,
                                        }))
                                    );
                                }}
                            >
                                {r.name}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='NewProject-container'>
                    <label className='NewProject-label'>Add a color tab for your project</label>
                    <div className='NewProject-tags-container'>
                        {projectColoursArray.map((r, i) => (
                            <div
                                key={i}
                                className={r.active ? 'NewProject-color-tag tag-active' : 'NewProject-color-tag'}
                                onClick={() => {
                                    setProjectColoursArray(prev =>
                                        prev.map((item, idx) => ({
                                            ...item,
                                            active: idx === i,
                                        }))
                                    );
                                }}

                            >
                                <div
                                    className='NewProject-color-tag-inside'
                                    style={{ backgroundColor: r.color }}
                                />
                            </div>
                        ))}
                    </div>

                    <button className='NewProject-submit'>Create project</button>
                </div>
            </div>
        </div>
    )
}


export function SavedResources() {


    useEffect(() => {

    })


    return (
        <div className='ConsoleTabs'>
            <h1 className='ConsoleTabs-title'>Create a new project</h1>
            <div className='ConsoleTabs-separator' />

            <div className='NewProject-form-container'>

                <div className='NewProject-container'>
                    <label className='NewProject-label'> <PiNumberCircleOneFill className='NewProject-label-icon' />Project title</label>
                    <input className='NewProject-input'
                        placeholder='Ex: Microbiology PHD research'
                    />
                </div>

                <div className='NewProject-container'>
                    <label className='NewProject-label'> <PiNumberCircleTwoFill className='NewProject-label-icon' />What is the project about ?</label>
                    <div className='NewProject-tags-container'>

                        {projectTypes.map((r) => (
                            <div className='NewProject-tag'>
                                {r.name}
                            </div>
                        ))}
                    </div>
                </div>

                <button className='NewProject-submit'>Create project</button>
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

export function Settings() {
    return (
        <div>
            <button onClick={() => toggleTheme()}>toggle dark/light</button>
        </div>
    )
}