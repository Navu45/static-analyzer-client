import React from 'react'
import AnalysisService from "../AnalyzerService";

const AnalysisContext = React.createContext()
const analyserService = new AnalysisService()

const noReview = {
    problems: [],
    repo: null,
    date: null,
    _links: null
}

const saveReview = function (review)
{
    localStorage.setItem("lastReview", review)
}

function AnalysisProvider(props) {
    const [repositories, setRepositories] = React.useState([])
    const [lastReview, setLastReview] = React.useState(noReview)
    const value = React.useMemo(() => {
        return {
            repositories,
            setRepositories,
            lastReview,
            setLastReview
        }
    }, [lastReview, repositories])
    return <AnalysisContext.Provider value={value} {...props} />
}

function useAnalysis() {
    const context = React.useContext(AnalysisContext)
    if (!context) {
        throw new Error('useAnalysisContext must be used within a AnalysisProvider')
    }
    const {repositories, setRepositories, lastReview, setLastReview} = context

    return {
        repositories,
        setRepositories,
        analyserService,
        lastReview,
        setLastReview,
        saveReview
    }
}

export {AnalysisProvider, useAnalysis}