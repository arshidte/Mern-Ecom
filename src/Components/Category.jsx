import styled from "styled-components";
import { categories } from "../Data";
import { Mobile } from "../Responsive";
import CategoryItem from "./CategoryItem";


const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    ${Mobile({padding: "0px", flexDirection: "column" })}
`

const Category = () => {
    return <Container>
        {categories.map((item) => (
            <CategoryItem item={item} />
        ))}
    </Container>
}
export default Category;
