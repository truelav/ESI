import { Spinner } from "@shopify/polaris";
import React from "react";

interface SpinnerProps {
  size?: "small" | "large";
  accessibilityLabel?: string;
}

export function SpinnerComponent(props: SpinnerProps) {
  const { accessibilityLabel, size } = props;
  return <Spinner accessibilityLabel={accessibilityLabel} size={size} />;
}
