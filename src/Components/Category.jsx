import styled from "styled-components";
import { categories } from "../Data";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`

const Category = () => {
    return <Container>
        {categories.map((item) => (
            <CategoryItem item={item} />
        ))}
    </Container>
}
export default Category;
