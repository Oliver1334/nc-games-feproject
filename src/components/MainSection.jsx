import { useState } from 'react';
import { Routes, Route, useResolvedPath, Link } from 'react-router-dom'
import ReviewList from './ReviewList'
import ViewReview from './ViewReview'
import CatFilter from './CatFilter'

const MainSection = () => {
    const [category, setCategory] = useState("")
    const { pathname } = useResolvedPath();

return (
    <main>
         {pathname === "/" ? (
    <div id="category-selector">
        <CatFilter setCategory={setCategory} />
    </div>
 ) : (
    ""
)}
       
        <Routes>
            <Route path="/" element={<ReviewList category={category} />}/>
            <Route path="/reviews/:review_id" element={<ViewReview />} />
        </Routes>
    </main>
)
}

export default MainSection;





