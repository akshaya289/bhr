import React, { useState } from "react";
import './FileFolderList.css'


const FileFolderList = ({ data }) => {
    const [fileList, setFileList] = useState(null)
    const [filteredData, setFilteredData] = useState('')
    const [sortByType, setSortByType] = useState('date')

    //Filtered List
    const filteredListItems = data.filter((filterItem) => (filterItem.name.toLowerCase().includes(filteredData.toLowerCase())))

    //List contents inside folder
    const OpenFolder = (selectedFolder) => {
        if (selectedFolder.type === 'folder') {
            setFileList(selectedFolder)
        }
    }

    //Navigate back to document list from folder
    const ShowDocList = () => {
        setFileList(null)
    }

    //Fetching filter value to filter the list
    const HandleFilterChange = (e) => {
        setFilteredData(e.target.value)
    }

    //Fetching sort option to implement sort logic
    const HandleSortChange = (e) => {
        setSortByType(e.target.value)
    }

    //Sorted Data
    const sortedData = [...filteredListItems].sort((a, b) => {
        switch (sortByType) {
            case 'name':
                return (a.name.localeCompare(b.name))
            case 'size':
                return (a.length - b.length)
            case 'date':
                return (new Date(a.added) - new Date(b.added))
            default:
                return null
        }
     }
    )

    return (
            <div className="fileFolderList">
                {fileList ? (
                    <li>
                        <div className="sub-header">
                            <div><b>{fileList.name}</b></div>
                            <button onClick={ShowDocList}>X</button>
                        </div>
                        <ul>
                            {fileList.files.map(fileItem => (
                                <li key={fileItem.name} onClick={() => OpenFolder(fileItem)}>
                                    <div className="fileItem">
                                        <div>{fileItem.name}</div>
                                        <div className="group">{fileItem.added}</div>
                                        <div className={`group ${fileItem.type === 'folder' ? 'folderColor':''}`}>{fileItem.type}</div>
                                    </div>
                                </li>
                            ))}

                        </ul>
                    </li>
                ) : (<>
                    <div>
                    <label>Filter By Name</label><input type="text" value={filteredData} placeholder="Search" onChange={HandleFilterChange} />
                        <label>Sort By</label><select value={sortByType} onChange={HandleSortChange}>
                            <option value="name">Name</option>
                            <option value="size">Size</option>
                            <option value="date">Date</option>
                        </select>
                    </div>
                    <ul>
                        {sortedData.map(fileItem => (
                            <li key={fileItem.name} onClick={() => OpenFolder(fileItem)}>
                                <div className="fileItem">
                                    <div>{fileItem.name}</div>
                                    <div className="group">{fileItem.added}</div>
                                    <div className={`group ${fileItem.type === 'folder' ? 'folderColor':''}`}>{fileItem.type}</div>
                                </div>
                            </li>
                        ))}</ul>
                </>)}
            </div>
    )
}

export default FileFolderList;