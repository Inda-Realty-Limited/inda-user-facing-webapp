import { Text } from "../base";
import { Container } from "./Container";

export const Footer = () => {
  return (
    <Container>
      <Text className="text-center">© 2025 INDA, Inc. All rights reserved</Text>
      <div className="flex justify-center gap-4 mt-2">
        <a href="/terms" className="text-blue-600 hover:underline">
          Terms of Service
        </a>
        <a href="/privacy" className="text-blue-600 hover:underline">
          Privacy Policy
        </a>
      </div>
    </Container>
  );
};
