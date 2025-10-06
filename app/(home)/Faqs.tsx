'use client';
import { Accordion, AccordionItem } from '@nextui-org/react';
// @ts-ignore
import cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { host } from '../layout/ClientHost';

const Faqs = () => {
  const [showGems, setShowGems] = useState(true);
  useEffect(() => {
    setShowGems(cookies.get('country') !== 'HK');
  }, []);
  const name = host?.includes('sorapix') ? 'SoraPix' : 'iFantasy';
  const domain = host?.includes('sorapix') ? 'sorapix.ai' : 'ifantasy.ai';
  return (
    <div className="mt-20 w-full">
      <div className="w-full text-center text-3xl font-bold">
        AI Art Tool FAQs
      </div>
      <div className="mt-6 w-full text-center text-sm font-bold">
        Disclaimer: Adult, Age-Restricted, Sexually-Orientated or Pornagraphic
        Content Cannot be Generated Using Our Site
      </div>
      <div className="ml-4">
        <Accordion>
          <AccordionItem
            key="1"
            aria-label="1. How Do AI Image Tools Work?"
            title="1. How Do AI Image Tools Work?"
          >
            Our AI Image tools use machine learning algorithms and deep neural
            networks to create images. Large sets of already-made art are used
            to teach these algorithms how to find patterns and styles that can
            be used to make new images.
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="2. Are AI Created Images Copyrighted?"
            title="2. Are AI Created Images Copyrighted?"
          >
            No. {name} creates images that do not exist, so there is no need to
            worry about copyright issues.
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="3. What should I do if I get a bad result?"
            title="3. What should I do if I get a bad result?"
          >
            Unfortunately, we cannot always guarantee you a good result. But it
            depends 95% on which photo you use and how you paint over the
            clothes.
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="4. How can I get in touch with support team?"
            title="4. How can I get in touch with support team?"
          >
            You can contact our customer support team by sending an email to
            customer@{domain} . We aim to respond to all inquiries within 24
            hours, although response times may vary depending on the volume of
            requests we receive.
          </AccordionItem>
          <AccordionItem
            key="5"
            aria-label="5. Can I try your AI anime service for free?"
            title="5. Can I try your AI anime service for free?"
          >
            Yes, {name} is free to use with limitations. You can generate up to
            2 free images to start with {name}.{' '}
            {showGems && (
              <span>
                If you have run out of all your Gems, please subscribe or
                purchase your Gems Bundles to get more Gems.
              </span>
            )}
          </AccordionItem>
          <AccordionItem
            key="6"
            aria-label="6. Do you offer any other AI tools rather than generators?"
            title="6. Do you offer any other AI tools rather than generators?"
          >
            Not only variety of anime AI generators, we also provide features
            such as rapid facial swapping, AI image-to-image convertor, and AI
            GIF.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Faqs;
