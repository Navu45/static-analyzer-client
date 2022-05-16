import React, {useEffect} from 'react'
import AnalysisService from "../AnalyzerService";
import {useAuth} from "./AuthContext";

const AnalysisContext = React.createContext()
const analyserService = new AnalysisService()

function AnalysisProvider(props) {
    const [repositories, setRepositories] = React.useState([])
    const [firstLoad, setFirstLoad] = React.useState(true)
    const value = React.useMemo(() => {
        return {
            repositories,
            setRepositories,
            firstLoad,
            setFirstLoad
        }
    }, [firstLoad, repositories])
    return <AnalysisContext.Provider value={value} {...props} />
}

function useAnalysis() {
    const context = React.useContext(AnalysisContext)
    if (!context) {
        throw new Error('useAnalysisContext must be used within a AnalysisProvider')
    }
    const {repositories, setRepositories, firstLoad, setFirstLoad} = context

    return {
        repositories,
        setRepositories,
        analyserService,
        firstLoad,
        setFirstLoad
    }
}

export {AnalysisProvider, useAnalysis}