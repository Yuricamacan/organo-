import styled from "styled-components";

interface BannerProps {
	srcImage: string;
	altText?: string;
}

const BannerContainer = styled.section`
    width: 100vw;
    padding: 0;
    margin: 0;

    & img{
        width: 100%;
    }
`;

export default function Banner({ srcImage, altText }: BannerProps) {
	return (
		<BannerContainer>
			<img src={srcImage} alt={altText} />
		</BannerContainer>
	)
}