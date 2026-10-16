// NMS Mailer settings. Nothing here is secret: a client ID only names the app registration.
window.NMS_MAILER_CONFIG = {
  tenantId: "fe88157a-a7cf-422f-9e12-feb0d302ff37", // networkms.com
  clientId: "190797ff-cd78-4020-b0e0-1da6560aba92",                                  // "NMS Mailer" app registration in Entra ID (filled in after setup)
  // pages allowed to hand an email to this window (NMS Ledger runs on claude.ai artifact frames)
  allowedOrigins: ["^https://[0-9a-f-]{36}\\.frame\\.claudeusercontent\\.com$"]
};
