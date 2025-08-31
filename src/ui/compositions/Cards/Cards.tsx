import clsx from "clsx";
import { Product } from "data";
import { useMediaQuery } from "hooks";
import { IconStar } from "icons";
import { Flex } from "layout";
import {
  Avatar,
  AvatarBlock,
  AvatarProps,
  Image,
  Text,
  TextHeading,
  TextSmall,
  TextStrong,
  TextSubheading,
} from "primitives";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { AnchorOrButton, AnchorOrButtonProps } from "utils";
import "./cards.css";

export type CardProps = ComponentPropsWithoutRef<"div"> & {
  /**
   * The alignment of the card content.
   */
  align?: "start" | "center" | "end";
  /**
   * The initial direction of the card.
   * All cards become vertical on mobile.
   */
  direction?: "horizontal" | "vertical";
  /**
   * The interaction props for the Card.
   * If present, the card itself is pressable.
   * AnchorOrButtonProps extend either button or anchor behavior.
   */
  interactionProps?: AnchorOrButtonProps;
  /**
   * An asset for the card.
   * Can be an Icon or an Image instance.
   */
  asset?: React.ReactNode;
  /**
   * Padding can be none, 600, or 800
   */
  padding?: "600" | "800";
  /**
   * Style variation of the card.
   */
  variant?: "default" | "stroke" | "brand";
};

/**
 * The basic card generic component that can be used to create vanity card components.
 */
export function Card({
  align = "start",
  children,
  className,
  direction = "vertical",
  interactionProps,
  variant = "default",
  asset,
  padding,
  ...props
}: CardProps) {
  const { isMobile } = useMediaQuery();
  const classNames = clsx(
    className,
    "card",
    `card-align-${align}`,
    `card-direction-${isMobile ? "vertical" : direction}`,
    `card-padding-${padding ? padding : "0"}`,
    `card-variant-${variant}`,
  );
  return (
    <div className={classNames} {...props}>
      {asset && <div className="card-asset">{asset}</div>}
      <div className="card-content">{children}</div>
      {interactionProps && (
        <AnchorOrButton className="card-interaction" {...interactionProps} />
      )}
    </div>
  );
}

/**
 * Converts a Product to ProductInfoCardProps object.
 */
export function productToProductInfoCardProps(
  product: Product,
): ProductInfoCardProps {
  return {
    heading: product.name,
    price: product.price.toString(),
    description: product.description,
    rating: product.rating,
    asset: (
      <Image
        src={product.imageUrl}
        alt={product.name}
        aspectRatio="4-3"
        className="product-info-card-asset"
      />
    ),
  };
}

export type ProductInfoCardProps = Pick<CardProps, "asset"> & {
  /**
   * The product name
   */
  heading: string;
  /**
   * The price excluding currency
   */
  price: string;
  /**
   * The description of the product
   */
  description: string;
  /**
   * The rating for the product
   */
  rating: number;
};

/**
 * This is used to show a loading state for ProductInfoCard.
 * It has no props, but accepts a size prop to determine the size of the card.
 */

export function ProductInfoCardSkeleton({}: {}) {
  return (
    <Card
      padding="600"
      direction="vertical"
      variant="stroke"
      asset={
        <Image
          aspectRatio="4-3"
          alt="Placeholder image"
          className="product-info-card-asset"
        />
      }
    >
      <Flex direction="column" gap="200">
        <TextSubheading lineClamp={1}>&nbsp;</TextSubheading>
        <TextStrong>&nbsp;</TextStrong>
        <Text lineClamp={2}>&nbsp;</Text>
      </Flex>
    </Card>
  );
}

/**
 * A card that demonstrates product information with a CTA
 */
export function ProductInfoCard({
  asset,
  heading,
  price,
  description,
  rating,
  ...props
}: ProductInfoCardProps) {
  return (
    <Card
      {...props}
      padding="600"
      direction="vertical"
      variant="stroke"
      asset={asset}
    >
      <Flex direction="column" gap="200">
        <TextSubheading lineClamp={1}>{heading}</TextSubheading>
        <TextStrong>
          ${price} ({rating} rating)
        </TextStrong>
        <Text lineClamp={2}>{description}</Text>
      </Flex>
    </Card>
  );
}

export type ReviewCardProps = {
  /**
   * The number of stars (1-5)
   */
  stars: number;
  /**
   * The title of the review
   */
  title: string;
  /**
   * The review
   */
  body: string;
  /**
   * The name of the reviewer
   */
  name: string;
  /**
   * The date of the review
   */
  date: string;
  /**
   * The avatar src
   */
  src?: AvatarProps["src"];
};

/**
 * A card demonstrating a statistic or metric
 */
export function ReviewCard({
  stars,
  title,
  body,
  name,
  date,
  src,

  ...props
}: ReviewCardProps) {
  return (
    <Card {...props} padding="600" direction="vertical" variant="stroke">
      <Flex gap="100">
        {new Array(stars).fill(0).map((_, i) => (
          <IconStar key={i} />
        ))}
      </Flex>
      <Flex direction="column" gap="100">
        <TextHeading>{title}</TextHeading>
        <TextSmall>{body}</TextSmall>
      </Flex>
      <AvatarBlock title={name} description={date}>
        <Avatar size="large" src={src} initials={name.charAt(0)} />
      </AvatarBlock>
    </Card>
  );
}

export type StatsCardProps = {
  /**
   * The icon
   */
  icon?: ReactNode;
  /**
   * The stat
   */
  stat: string;
  /**
   * The description
   */
  description: string;
};

/**
 * A card demonstrating a statistic or metric
 */
export function StatsCard({
  icon,
  stat,
  description,
  ...props
}: StatsCardProps) {
  return (
    <Card
      {...props}
      padding="600"
      direction="vertical"
      variant="stroke"
      align="center"
    >
      {icon}
      <Flex direction="column" alignSecondary="center" gap="100">
        <TextHeading>{stat}</TextHeading>
        {description && <TextSmall>{description}</TextSmall>}
      </Flex>
    </Card>
  );
}

export type TestimonialCardProps = {
  /**
   * The testimonial quote
   */
  heading: string;
  /**
   * The name of the author
   */
  name: string;
  /**
   * The username of the author
   */
  username: string;
  /**
   * The initials of the author
   */
  initials?: AvatarProps["initials"];
  /**
   * An image url for the author
   */
  src?: AvatarProps["src"];
};

/**
 * A card demonstrating a quotation from someone
 */
export function TestimonialCard({
  heading,
  name,
  username,
  initials,
  src,
  ...props
}: TestimonialCardProps) {
  return (
    <Card {...props} padding="600" direction="vertical" variant="stroke">
      <TextHeading>{heading}</TextHeading>
      <AvatarBlock title={name} description={`@${username}`}>
        <Avatar size="large" src={src} initials={initials} />
      </AvatarBlock>
    </Card>
  );
}
