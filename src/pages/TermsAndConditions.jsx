import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold" color="green">
        Terms & Conditions
      </Typography>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" gutterBottom>
          1. Introduction
        </Typography>
        <Typography paragraph>
          By accessing and using our platform, you agree to comply with and be bound by the following terms and conditions of use.
        </Typography>

        <Typography variant="h6" gutterBottom>
          2. Use of the Website
        </Typography>
        <Typography paragraph>
          This website is intended for personal, non-commercial use only. You may not use our content for any unauthorized or illegal purpose.
        </Typography>

        <Typography variant="h6" gutterBottom>
          3. Intellectual Property
        </Typography>
        <Typography paragraph>
          All content, logos, and course materials are the intellectual property of EduCraft or its content providers and protected by copyright laws.
        </Typography>

        <Typography variant="h6" gutterBottom>
          4. Account Responsibility
        </Typography>
        <Typography paragraph>
          You are responsible for maintaining the confidentiality of your account and password. EduCraft is not liable for any misuse of your credentials.
        </Typography>

        <Typography variant="h6" gutterBottom>
          5. Payments & Refunds
        </Typography>
        <Typography paragraph>
          All sales are final. We do not offer refunds unless a course is found to be completely inaccessible due to a system error.
        </Typography>

        <Typography variant="h6" gutterBottom>
          6. Changes to Terms
        </Typography>
        <Typography paragraph>
          EduCraft reserves the right to modify these terms at any time. Continued use of the website implies acceptance of the updated terms.
        </Typography>

        <Typography variant="h6" gutterBottom>
          7. Contact Us
        </Typography>
        <Typography paragraph>
          If you have any questions about these Terms and Conditions, please contact us at support@educraft.com
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsAndConditions;
