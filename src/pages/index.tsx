import styled from 'styled-components'

const ContentWrapper = styled.main`
    height: auto;
    width: 100%;
`

const TestComponent = () => <h1>Hello Next.js</h1>
export default function Home(): JSX.Element {
    return (
        <>
            <ContentWrapper>
                <TestComponent />
            </ContentWrapper>
        </>
    )
}
