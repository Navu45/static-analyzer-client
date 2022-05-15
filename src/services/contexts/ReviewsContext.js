import React, {useEffect} from 'react'
import CodeReviewService from "../CodeReviewService";

const CodeReviewContext = React.createContext()

function CodeReviewProvider(props) {
    const [codeReviewService, setService] = React.useState(0)
    const value = React.useMemo(() => {
        return {
            codeReviewService,
            setService,
        }
    }, [codeReviewService])
    return <CodeReviewContext.Provider value={value} {...props} />
}

function useCodeReview() {
    const context = React.useContext(CodeReviewContext)
    if (!context) {
        throw new Error('useAnalysisContext must be used within a AnalysisProvider')
    }
    const {codeReviewService, setService} = context
    useEffect(() => {
        setService(new CodeReviewService())
    }, [setService]);

    return codeReviewService
}

export {CodeReviewProvider, useCodeReview}