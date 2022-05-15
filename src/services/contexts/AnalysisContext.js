import React, {useEffect} from 'react'
import AnalysisService from "../AnalyzerService";

const AnalysisContext = React.createContext()

function AnalysisProvider(props) {
    const [analyser, setAnalyser] = React.useState(0)
    const value = React.useMemo(() => {
        return {
            analyser,
            setAnalyser,
        }
    }, [analyser])
    return <AnalysisContext.Provider value={value} {...props} />
}

function useAnalysis() {
    const context = React.useContext(AnalysisContext)
    if (!context) {
        throw new Error('useAnalysisContext must be used within a AnalysisProvider')
    }
    const {analyser, setAnalyser} = context
    useEffect(() => {
        setAnalyser(new AnalysisService())
    }, [setAnalyser]);
    return analyser
}

export {AnalysisProvider, useAnalysis}