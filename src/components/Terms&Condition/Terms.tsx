

const Terms = () => {
  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md">
      <h1 className="text-4xl font-bold text-center text-brand mb-6">Terms and Conditions</h1>
      <p className="text-sm text-gray-300 mb-4">Effective Date: [Insert Date]</p>
      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">1. Legal Disclaimer</h2>
        <p className="text-gray-400">
          INDO X Tokens are utility tokens for use within the INDO X ecosystem and do not constitute securities, shares, or ownership in [Your Company Name] or any associated entities. 
          The Tokens should not be acquired with expectations of profit or financial gain.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">2. Eligibility and Compliance</h2>
        <ul className="list-disc pl-6 text-gray-400">
          <li>You must be at least 18 years old or meet the legal age in your jurisdiction.</li>
          <li>
            You must not be a citizen or resident of countries where the sale or use of tokens is prohibited.
          </li>
          <li>
            You are solely responsible for ensuring compliance with local laws and tax obligations.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">3. Risk Disclosure</h2>
        <p className="text-gray-400">
          By purchasing, holding, or using INDO X Tokens, you accept risks including volatility, regulatory uncertainty, and technology failures. INDO X is not responsible for losses.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">4. No Guarantees or Warranties</h2>
        <p className="text-gray-400">
          INDO X Tokens are provided "as is" without warranties. All transactions are final, and no refunds are available.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">5. Token Functionality</h2>
        <p className="text-gray-400">
          The INDO X Token is a utility token for specific use cases within the INDO X ecosystem. Ownership does not grant governance or ownership rights.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">6. Limitation of Liability</h2>
        <p className="text-gray-400">
          INDO X is not liable for damages, losses, or regulatory actions affecting the Token.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">7. Indemnification</h2>
        <p className="text-gray-400">
          You agree to indemnify INDO X for any claims or losses arising from misuse or violation of these Terms.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">8. Intellectual Property Rights</h2>
        <p className="text-gray-400">
          All intellectual property associated with INDO X is owned by [Your Company Name]. Unauthorized use is prohibited.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">9. KYC/AML Compliance</h2>
        <p className="text-gray-400">
          INDO X may conduct KYC and AML checks at any time. Failure to comply may result in restricted access.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-bold text-coral">10. Governing Law and Dispute Resolution</h2>
        <p className="text-gray-400">
          These Terms are governed by Indian law. Disputes will be resolved through arbitration.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-coral">11. Amendments to These Terms</h2>
        <p className="text-gray-400">
          INDO X reserves the right to update these Terms. Changes will be posted on the official website.
        </p>
      </section>
    </div>
  );
};

export default Terms;
