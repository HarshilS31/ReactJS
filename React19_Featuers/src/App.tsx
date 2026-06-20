import React, { Suspense } from 'react'
import USE_Hook from './USE_Hook'
const App = () => {
    return (
        <Suspense fallback={<div>Loading your data...</div>}>{/* use Suspense if we have used "USE" hook in the imported  component*/}
            <USE_Hook />
        </Suspense>
    );
};

export default App