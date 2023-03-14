const CatFilterOption = ({category}) => {
    const {slug, description} = category
    return (
        <option value={slug}>
            {slug}
        </option>
    )
}

export default CatFilterOption