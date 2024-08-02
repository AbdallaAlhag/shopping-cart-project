import {
  Container,
  Content,
  Column,
  StyledImg,
  StyledP,
  StyledButton,
  StyledDiv,
} from "../../style/CommonComponents";
import PropTypes from "prop-types";
import AccordionComponent from "./AccordionComponent";

const ItemInfo = ({ item }) => {
  // Construct the complete image URL
  const completeImageUrl = item.imageUrl.startsWith("http")
    ? item.imageUrl
    : `https://${item.imageUrl}`;

  // Logging the item id for debugging

  return (
    <Container $gap="50px">
      <Content>
        <StyledImg src={completeImageUrl} alt={item.name} />
      </Content>
      <Column
        $justifyContent="flex-start"
        $alignItems="flex-start"
        $width="35%"
      >
        <StyledP $margin="10px 0px" $textAlign="left">
          {item.name}
        </StyledP>
        <StyledP $margin="10px 0px" $textAlign="left">
          {item.price.current?.text || "N/A"}
        </StyledP>{" "}
        {/* Access price text */}
        <StyledDiv $backGroundColor="#cde2f5">
          <StyledP $margin="10px 0px" $textAlign="left">
            {/* icon */}
            PSST! NEW HERE? Get 10% off almost everything!* With code:{" "}
            <strong>HIFRIEND</strong>
          </StyledP>
        </StyledDiv>
        <StyledP $fontSize="12px" $textAlign="left" $margin="10px 0px">
          <strong>COLOR:</strong> {item.colour || "N/A"}
        </StyledP>
        {/* Drop Down Menu */}
        <StyledButton
          $width="100%"
          $margin="10px 0px
        "
          $bgColor="#018849"
          $hoverBgColor="#006637"
          $textColor="white"
          $border="2px solid #018849"
          $borderRadius="0px"
          $hoverBorderColor="#006637"
        >
          {/* Icon */}
          Add to Bag
        </StyledButton>
        {/* Heart Button */}
        <Column $width="100%" $alignItems="flex-start">
          <StyledDiv>
            {/* Truck Delivery Icon */}
            <StyledP $fontSize="12px" $textAlign="left" $margin="0px 0px">
              Free delivery on qualifying orders.
            </StyledP>
          </StyledDiv>
          <StyledDiv>
            {/* Return Icon */}
            <StyledP $fontSize="12px" $textAlign="left" $margin="0px 0px">
              Free Returns
            </StyledP>
          </StyledDiv>
        </Column>
        <AccordionComponent productId={item.id} />
      </Column>
    </Container>
  );
};

// PropTypes for validation
ItemInfo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    price: PropTypes.shape({
      current: PropTypes.shape({
        text: PropTypes.string,
      }),
    }),
    colour: PropTypes.string,
  }).isRequired,
};

export default ItemInfo;