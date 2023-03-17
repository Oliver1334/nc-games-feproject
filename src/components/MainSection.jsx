import { useState } from 'react';
import { Routes, Route, useResolvedPath, Link } from 'react-router-dom'
import ReviewList from './ReviewList'
import ViewReview from './ViewReview'
import CatFilter from './CatFilter'
import Footer from './Footer'
import AddComment from './AddComment'

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
            <Route path="/reviews/comment/:review_id" element={<AddComment/>} />
        </Routes>
        {pathname === "/" ? (
        <Footer/>
 ) : (
    ""
)}
    </main>
)
}

export default MainSection;





