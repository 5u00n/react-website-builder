import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import PageBuilder from '../components/PageBuilder';
import SettingsPanel from '../components/SettingsPanel';

const EditPage = () => {
    const { slug } = useParams();
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [components, setComponents] = useState([]);
    const [pageTitle, setPageTitle] = useState('');

    useEffect(() => {
        // Load saved page data
        const savedPage = localStorage.getItem(slug);
        if (savedPage) {
            const parsedPage = JSON.parse(savedPage);
            setComponents(parsedPage.content);
            setPageTitle(parsedPage.title);
        }
    }, [slug]);

    const updateComponent = (id, settings) => {
        setComponents((prevComponents) =>
            prevComponents.map((comp) => (comp.id === id ? { ...comp, settings } : comp))
        );
    };

    const handlePublish = () => {
        const pageData = {
            title: pageTitle,
            content: components,
        };
        localStorage.setItem(slug, JSON.stringify(pageData));
        alert('Page Published!');
    };

    return (
        <div className="flex w-full min-h-screen">
            <div className="fixed left-0 top-0 h-full">
                <Sidebar />
            </div>
            <div className="flex-1 p-6 ml-64 mr-64">
                <div className="mb-4 flex justify-between flex-row space-x-4">
                    <input
                        type="text"
                        value={pageTitle}
                        onChange={(e) => setPageTitle(e.target.value)}
                        className="mb-4 p-2 border border-gray-300 rounded-md basis-2/4"
                        placeholder="Enter page title"
                    />

                    <button
                        onClick={() => window.open(`/preview/${slug}`, '_blank')}
                        className="bg-green-500 text-white px-4 py-2 rounded-md shadow hover:bg-green-600 basis-1/4 h-full whitespace-nowrap"
                    >
                        Preview
                    </button>
                    <button
                        onClick={handlePublish}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 basis-1/4 h-full whitespace-nowrap"
                    >
                        Publish
                    </button>
                </div>
                <PageBuilder
                    components={components}
                    updateComponent={updateComponent}
                    setSelectedComponent={setSelectedComponent}
                    setComponents={setComponents}
                />
            </div>
            <div className="fixed right-0 top-0 h-full">
                <SettingsPanel selectedComponent={selectedComponent} updateComponent={updateComponent} />
            </div>
        </div>
    );
};

export default EditPage;