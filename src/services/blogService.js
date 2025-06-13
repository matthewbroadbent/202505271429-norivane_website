// This is a mock service for blog functionality
// In a real application, this would connect to a backend API

// Sample blog post data
const blogPosts = [
  {
    id: '1',
    title: 'Maximizing Business Value Before Exit: 5 Proven Strategies',
    slug: 'maximizing-business-value-before-exit',
    excerpt: 'Learn the five key strategies that can significantly increase your business valuation before you sell. These proven approaches have helped CEOs achieve 30-50% higher exit values.',
    content: `<h2 id="introduction">Introduction</h2>
      <p>When preparing to exit your business, the goal is clear: maximize its value to potential buyers. However, the path to achieving this goal is often less obvious. Many business owners make the mistake of waiting until they're ready to sell before thinking about value enhancement.</p>
      
      <p>In this comprehensive guide, we'll explore five proven strategies that can significantly increase your business's value before you exit. These aren't quick fixes but rather strategic approaches that require planning and implementation well in advance of your intended sale date.</p>
      
      <h2 id="strategy-1">Strategy 1: Strengthen Your Management Team</h2>
      <p>One of the most valuable assets in any business is a strong, independent management team that can operate without the owner's constant involvement. Buyers are looking for businesses that won't collapse when the founder leaves.</p>
      
      <p>To strengthen your management team:</p>
      <ul>
        <li>Identify key leadership positions and ensure they're filled with capable individuals</li>
        <li>Document processes and decision-making frameworks</li>
        <li>Gradually reduce your operational involvement while maintaining strategic oversight</li>
        <li>Implement succession planning for all critical roles</li>
      </ul>
      
      <h2 id="strategy-2">Strategy 2: Diversify Your Customer Base</h2>
      <p>Customer concentration is a major red flag for potential buyers. If a significant portion of your revenue comes from a small number of customers, the business is perceived as high-risk.</p>
      
      <p>Aim to ensure that no single customer represents more than 10% of your total revenue. This might mean:</p>
      <ul>
        <li>Expanding into new market segments</li>
        <li>Developing new products or services that appeal to different customer types</li>
        <li>Implementing marketing strategies to attract a broader customer base</li>
        <li>Creating contractual relationships that provide revenue stability</li>
      </ul>
      
      <h2 id="strategy-3">Strategy 3: Establish Recurring Revenue Streams</h2>
      <p>Businesses with predictable, recurring revenue are significantly more valuable than those relying on one-time sales. Subscription models, service contracts, and retainer arrangements all contribute to business stability and predictability.</p>
      
      <p>Consider how you might:</p>
      <ul>
        <li>Convert one-time purchases into subscription offerings</li>
        <li>Develop maintenance or support packages</li>
        <li>Create membership programs with exclusive benefits</li>
        <li>Implement auto-renewal options for existing services</li>
      </ul>
      
      <h2 id="strategy-4">Strategy 4: Clean Up Your Financials</h2>
      <p>Clear, accurate financial records are essential for a smooth due diligence process. Start cleaning up your financials at least two years before your planned exit.</p>
      
      <p>This includes:</p>
      <ul>
        <li>Separating personal and business expenses</li>
        <li>Ensuring all revenue is properly recorded</li>
        <li>Addressing any tax issues or discrepancies</li>
        <li>Producing professional financial statements (preferably audited)</li>
        <li>Documenting financial projections with solid assumptions</li>
      </ul>
      
      <h2 id="strategy-5">Strategy 5: Protect and Document Intellectual Property</h2>
      <p>Your business's intellectual property (IP) can be a significant value driver. Ensure all IP is properly protected and documented.</p>
      
      <p>Take these steps:</p>
      <ul>
        <li>Register trademarks, patents, and copyrights as appropriate</li>
        <li>Document proprietary processes and systems</li>
        <li>Ensure all IP assignments from employees and contractors are in place</li>
        <li>Create a comprehensive IP portfolio that can be shared during due diligence</li>
      </ul>
      
      <h2 id="conclusion">Conclusion</h2>
      <p>Implementing these five strategies requires time and focused effort, but the potential return on investment is substantial. Business owners who systematically address these areas typically see valuation increases of 30-50% compared to unprepared businesses of similar size and industry.</p>
      
      <p>Remember that value enhancement is not a last-minute exercise. The most successful exits are the result of years of intentional preparation. Start implementing these strategies today, even if your exit is still years away.</p>`,
    publishedAt: '2023-09-15T10:00:00Z',
    category: 'strategy',
    tags: ['exit planning', 'business valuation', 'management', 'financial planning'],
    featuredImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'Sarah Johnson',
      title: 'Exit Strategy Specialist',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'Sarah Johnson is a seasoned exit strategy specialist with over 15 years of experience helping business owners maximize their exit value. She has facilitated more than 50 successful business sales with a combined value exceeding £500 million.',
      shortBio: 'Exit strategy specialist with 15+ years of experience helping business owners maximize their exit value.',
      social: [
        { platform: 'linkedin', url: '#' },
        { platform: 'twitter', url: '#' }
      ]
    },
    tableOfContents: [
      { id: 'introduction', title: 'Introduction' },
      { id: 'strategy-1', title: 'Strategy 1: Strengthen Your Management Team' },
      { id: 'strategy-2', title: 'Strategy 2: Diversify Your Customer Base' },
      { id: 'strategy-3', title: 'Strategy 3: Establish Recurring Revenue Streams' },
      { id: 'strategy-4', title: 'Strategy 4: Clean Up Your Financials' },
      { id: 'strategy-5', title: 'Strategy 5: Protect and Document Intellectual Property' },
      { id: 'conclusion', title: 'Conclusion' }
    ],
    comments: [
      {
        id: 'c1',
        name: 'Michael Roberts',
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: 'This article was incredibly helpful. I'm planning to exit my manufacturing business in the next 3-5 years, and I've already started implementing some of these strategies. The point about strengthening the management team resonated with me the most.',
        createdAt: '2023-09-16T14:23:00Z',
        likes: 5,
        isAdmin: false
      },
      {
        id: 'c2',
        name: 'Sarah Johnson',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: 'Thank you for your comment, Michael! You're absolutely right to focus on your management team. In my experience, businesses with strong independent management teams can command a premium of 20-30% over similar businesses that are owner-dependent. Feel free to reach out if you have any specific questions about your exit strategy.',
        createdAt: '2023-09-16T16:45:00Z',
        likes: 3,
        isAdmin: true,
        replies: [
          {
            id: 'c3',
            name: 'Michael Roberts',
            avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
            content: 'Thanks for the response, Sarah. I'd love to learn more about how to document our processes effectively. Do you have any specific tools or frameworks you recommend?',
            createdAt: '2023-09-17T09:12:00Z',
            likes: 1,
            isAdmin: false
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: 'The Emotional Journey of Selling Your Business: What to Expect',
    slug: 'emotional-journey-selling-business',
    excerpt: 'Selling a business isn't just a financial transaction—it's an emotional journey. Discover the psychological stages most business owners experience and how to prepare yourself for this significant life transition.',
    content: `<h2>The Emotional Rollercoaster of Selling Your Business</h2>
      <p>After dedicating years or even decades to building your business, the decision to sell can trigger a complex mix of emotions. While much attention is given to the financial and legal aspects of a business sale, the emotional journey is often overlooked.</p>
      
      <p>In this article, we'll explore the psychological stages most business owners experience when selling their company and provide strategies for navigating this significant life transition.</p>
      
      <h2>Stage 1: Contemplation and Ambivalence</h2>
      <p>The journey begins long before any paperwork is signed. Many business owners spend years contemplating whether to sell, often cycling between certainty and doubt. This ambivalence is completely normal and stems from the deep personal connection most entrepreneurs have with their businesses.</p>
      
      <p>During this stage, you might experience:</p>
      <ul>
        <li>Difficulty separating your identity from your business</li>
        <li>Concerns about your purpose and daily routine after the sale</li>
        <li>Worries about the future of your employees and customers</li>
        <li>Uncertainty about whether the timing is right</li>
      </ul>
      
      <h2>Stage 2: Preparation and Excitement</h2>
      <p>Once you've committed to selling, there's often a period of excitement and renewed energy. The prospect of a significant financial reward and new opportunities can be invigorating. This is typically when you'll be working with advisors to prepare your business for sale.</p>
      
      <p>During this stage, focus on:</p>
      <ul>
        <li>Setting clear goals for the sale and your life afterward</li>
        <li>Assembling a strong advisory team (broker, accountant, lawyer)</li>
        <li>Beginning to explore interests and activities outside the business</li>
        <li>Preparing family members for the upcoming changes</li>
      </ul>
      
      <h2>Stage 3: Negotiation and Stress</h2>
      <p>As potential buyers emerge and negotiations begin, many business owners experience significant stress. The due diligence process can feel invasive, and tough negotiations may seem like a personal affront rather than a standard business practice.</p>
      
      <p>To manage this stage effectively:</p>
      <ul>
        <li>Rely on your advisors to handle difficult negotiations</li>
        <li>Maintain perspective on the business aspects of the transaction</li>
        <li>Practice self-care through exercise, meditation, or other stress-reduction techniques</li>
        <li>Keep communication open with family members who may also be feeling the stress</li>
      </ul>
      
      <h2>Stage 4: Transition and Mixed Emotions</h2>
      <p>After the sale is complete, many business owners experience a confusing mix of emotions. There's often relief and excitement about the financial windfall, but also sadness, loss of identity, and even regret. This emotional cocktail can be surprising and challenging.</p>
      
      <p>During this transition:</p>
      <ul>
        <li>Acknowledge all your feelings as valid, even the contradictory ones</li>
        <li>Give yourself permission to grieve the loss of your business role</li>
        <li>Celebrate your accomplishments and the successful sale</li>
        <li>Begin implementing your post-sale life plan, but don't rush major decisions</li>
      </ul>
      
      <h2>Stage 5: Reinvention and New Beginnings</h2>
      <p>The final stage involves creating a new identity and purpose beyond your former business. This doesn't happen overnight, but with intentional effort, most former business owners find new passions and sources of fulfillment.</p>
      
      <p>Successful strategies include:</p>
      <ul>
        <li>Exploring new business ventures, consulting, or board positions</li>
        <li>Mentoring other entrepreneurs or engaging in philanthropy</li>
        <li>Pursuing long-delayed personal interests or hobbies</li>
        <li>Connecting with other former business owners who understand the journey</li>
      </ul>
      
      <h2>Preparing Yourself Emotionally</h2>
      <p>While every business owner's emotional journey is unique, preparation can help smooth the transition. Consider these proactive steps:</p>
      
      <ul>
        <li>Work with a coach or therapist experienced in business transitions</li>
        <li>Develop a clear vision for your post-sale life well before the transaction</li>
        <li>Build a support network of family, friends, and other entrepreneurs</li>
        <li>Create a structured transition plan that includes both business and personal aspects</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Selling your business is as much an emotional journey as it is a financial transaction. By understanding and preparing for the psychological aspects of this major life change, you can navigate the process with greater resilience and ultimately find fulfillment in your next chapter.</p>
      
      <p>Remember that it's normal to experience a wide range of emotions throughout this process. With proper preparation and support, you can successfully transition from business owner to whatever exciting role comes next in your life journey.</p>`,
    publishedAt: '2023-08-22T14:30:00Z',
    category: 'psychology',
    tags: ['emotional intelligence', 'business transition', 'entrepreneur mindset', 'life planning'],
    featuredImage: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'David Chen',
      title: 'Business Psychologist',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'David Chen is a business psychologist specializing in entrepreneurial transitions. With a background in both clinical psychology and business, he helps business owners navigate the emotional aspects of major business decisions, particularly exits and successions.',
      shortBio: 'Business psychologist specializing in helping entrepreneurs navigate major transitions.',
      social: [
        { platform: 'linkedin', url: '#' },
        { platform: 'twitter', url: '#' }
      ]
    },
    tableOfContents: [
      { id: 'stage-1', title: 'Stage 1: Contemplation and Ambivalence' },
      { id: 'stage-2', title: 'Stage 2: Preparation and Excitement' },
      { id: 'stage-3', title: 'Stage 3: Negotiation and Stress' },
      { id: 'stage-4', title: 'Stage 4: Transition and Mixed Emotions' },
      { id: 'stage-5', title: 'Stage 5: Reinvention and New Beginnings' },
      { id: 'preparing', title: 'Preparing Yourself Emotionally' },
      { id: 'conclusion', title: 'Conclusion' }
    ],
    comments: [
      {
        id: 'c4',
        name: 'Jennifer Williams',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: 'This article really resonated with me. I sold my business two years ago and experienced every single one of these stages. The identity loss was the hardest part - I didn't realize how much of myself was wrapped up in being "the boss" until suddenly I wasn't anymore.',
        createdAt: '2023-08-23T09:17:00Z',
        likes: 8,
        isAdmin: false
      },
      {
        id: 'c5',
        name: 'Robert Thompson',
        avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: 'I'm currently in the negotiation stage of selling my technology company, and the stress is definitely real. The due diligence process feels like they're questioning every decision I've ever made. This article helped me realize that what I'm feeling is normal and part of the process.',
        createdAt: '2023-08-24T16:05:00Z',
        likes: 4,
        isAdmin: false
      }
    ]
  },
  {
    id: '3',
    title: 'How to Value Your Business: A Guide for CEOs',
    slug: 'how-to-value-your-business-guide-for-ceos',
    excerpt: 'Understanding your business's true value is essential for exit planning. This comprehensive guide explains the different valuation methods and how to choose the right approach for your specific business.',
    content: `<h2>Introduction to Business Valuation</h2>
      <p>Knowing the true value of your business is crucial, especially when you're considering an exit. However, business valuation is both an art and a science, with multiple methodologies that can yield significantly different results.</p>
      
      <p>This guide will help you understand the most common valuation methods, their applications, and how to determine which approach is most appropriate for your specific business.</p>
      
      <h2>Why Accurate Valuation Matters</h2>
      <p>Before diving into methodologies, it's important to understand why accurate valuation is so critical:</p>
      
      <ul>
        <li>It sets realistic expectations for your exit</li>
        <li>It helps identify value drivers that can be improved before sale</li>
        <li>It provides a benchmark for evaluating offers</li>
        <li>It assists in tax planning and wealth management</li>
        <li>It's essential for negotiations with potential buyers</li>
      </ul>
      
      <h2>Common Valuation Methods</h2>
      
      <h3>1. Earnings Multiple Method</h3>
      <p>The most common valuation method for small to medium-sized businesses is the earnings multiple approach, typically based on EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization).</p>
      
      <p><strong>Formula:</strong> Business Value = EBITDA × Industry Multiple</p>
      
      <p>Industry multiples typically range from 3-8× for small businesses, but can be higher for rapidly growing companies or those with significant competitive advantages.</p>
      
      <p><strong>Best for:</strong> Established businesses with stable earnings</p>
      
      <h3>2. Discounted Cash Flow (DCF) Method</h3>
      <p>The DCF method calculates the present value of projected future cash flows, plus a terminal value.</p>
      
      <p><strong>Formula:</strong> Business Value = Sum of (Future Cash Flows / (1 + Discount Rate)^n) + Terminal Value</p>
      
      <p>This method requires detailed financial projections and an appropriate discount rate that reflects the risk of the business.</p>
      
      <p><strong>Best for:</strong> Growing businesses with predictable future cash flows</p>
      
      <h3>3. Asset-Based Valuation</h3>
      <p>This approach values a business based on its net asset value (assets minus liabilities), with adjustments for the market value of those assets.</p>
      
      <p><strong>Formula:</strong> Business Value = Adjusted Assets - Liabilities</p>
      
      <p><strong>Best for:</strong> Asset-heavy businesses or those with significant tangible assets</p>
      
      <h3>4. Revenue Multiple Method</h3>
      <p>Some businesses are valued based on a multiple of their annual revenue.</p>
      
      <p><strong>Formula:</strong> Business Value = Annual Revenue × Industry Multiple</p>
      
      <p>Revenue multiples are typically lower than EBITDA multiples, often ranging from 0.5-3×.</p>
      
      <p><strong>Best for:</strong> Early-stage businesses or those with strong growth but limited profitability</p>
      
      <h2>Industry-Specific Considerations</h2>
      <p>Valuation methods and multiples vary significantly by industry:</p>
      
      <ul>
        <li><strong>Technology:</strong> Often valued on revenue multiples due to high growth potential</li>
        <li><strong>Manufacturing:</strong> Typically valued on EBITDA multiples with consideration of asset value</li>
        <li><strong>Professional Services:</strong> Often valued based on recurring revenue and client retention</li>
        <li><strong>Retail:</strong> Frequently valued on a combination of EBITDA and inventory value</li>
        <li><strong>SaaS:</strong> Commonly valued on ARR (Annual Recurring Revenue) multiples</li>
      </ul>
      
      <h2>Adjustments to Consider</h2>
      <p>Several factors may require adjustments to standard valuation calculations:</p>
      
      <h3>Normalizing Earnings</h3>
      <p>Before applying multiples, earnings should be "normalized" to reflect the true economic reality of the business. This includes:</p>
      
      <ul>
        <li>Adjusting owner compensation to market rates</li>
        <li>Removing one-time expenses or revenues</li>
        <li>Adjusting for non-operational expenses</li>
        <li>Accounting for related-party transactions at market rates</li>
      </ul>
      
      <h3>Risk Factors That Impact Valuation</h3>
      <p>Certain risk factors can significantly impact valuation multiples:</p>
      
      <ul>
        <li>Customer concentration (dependence on few customers)</li>
        <li>Key person risk (business dependent on owner)</li>
        <li>Market volatility or declining industry trends</li>
        <li>Regulatory challenges or compliance issues</li>
        <li>Competitive threats or weak barriers to entry</li>
      </ul>
      
      <h2>The Valuation Process</h2>
      <p>A thorough valuation typically follows these steps:</p>
      
      <ol>
        <li>Gather and analyze historical financial data (3-5 years)</li>
        <li>Normalize financial statements</li>
        <li>Develop financial projections (if using DCF)</li>
        <li>Research industry multiples and comparable transactions</li>
        <li>Apply appropriate valuation methodologies</li>
        <li>Make adjustments for company-specific factors</li>
        <li>Reconcile different valuation approaches</li>
        <li>Document the valuation with supporting evidence</li>
      </ol>
      
      <h2>Working with Valuation Professionals</h2>
      <p>While understanding valuation principles is important, working with professionals offers several advantages:</p>
      
      <ul>
        <li>Certified business appraisers bring objectivity and credibility</li>
        <li>Industry specialists understand sector-specific valuation nuances</li>
        <li>Professional valuations carry more weight in negotiations</li>
        <li>Experts can identify value enhancement opportunities</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Business valuation is not an exact science, but rather an informed assessment based on financial data, industry standards, and professional judgment. The most accurate valuations typically employ multiple methodologies and reconcile the results.</p>
      
      <p>Remember that a valuation is a starting point for exit planning and negotiations, not an absolute guarantee of sale price. Market conditions, buyer synergies, and negotiation skills all play important roles in the final transaction value.</p>
      
      <p>By understanding the principles behind business valuation, you'll be better equipped to work with professional advisors and maximize your company's value before exit.</p>`,
    publishedAt: '2023-07-10T09:15:00Z',
    category: 'finance',
    tags: ['business valuation', 'exit planning', 'financial analysis', 'EBITDA'],
    featuredImage: 'https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    author: {
      name: 'James Wilson',
      title: 'Business Valuation Expert',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      bio: 'James Wilson is a Certified Business Appraiser with over 20 years of experience in business valuation. He has valued more than 300 businesses across multiple industries and specializes in exit planning for mid-market companies.',
      shortBio: 'Certified Business Appraiser with 20+ years of experience in business valuation.',
      social: [
        { platform: 'linkedin', url: '#' },
        { platform: 'twitter', url: '#' }
      ]
    },
    tableOfContents: [
      { id: 'introduction', title: 'Introduction to Business Valuation' },
      { id: 'why-matters', title: 'Why Accurate Valuation Matters' },
      { id: 'common-methods', title: 'Common Valuation Methods' },
      { id: 'industry-considerations', title: 'Industry-Specific Considerations' },
      { id: 'adjustments', title: 'Adjustments to Consider' },
      { id: 'process', title: 'The Valuation Process' },
      { id: 'professionals', title: 'Working with Valuation Professionals' },
      { id: 'conclusion', title: 'Conclusion' }
    ],
    comments: [
      {
        id: 'c6',
        name: 'Thomas Anderson',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: 'This is exactly the information I've been looking for. I'm planning to exit my manufacturing business in the next two years, and understanding these valuation methods helps me know what to focus on improving. The section on normalizing earnings was particularly eye-opening.',
        createdAt: '2023-07-11T11:42:00Z',
        likes: 6,
        isAdmin: false
      },
      {
        id: 'c7',
        name: 'Lisa Chen',
        avatar: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        content: 'I recently had my SaaS business valued and was surprised at how much emphasis was placed on our MRR growth rate rather than current profitability. This article helps explain why that approach makes sense for our industry. Would love to see a follow-up piece specifically on SaaS valuations.',
        createdAt: '2023-07-12T15:23:00Z',
        likes: 9,
        isAdmin: false
      }
    ]
  }
];

// Get all blog posts
export const getAllBlogPosts = async () => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Return posts sorted by date (newest first)
  return [...blogPosts].sort((a, b) => 
    new Date(b.publishedAt) - new Date(a.publishedAt)
  );
};

// Get recent blog posts
export const getRecentBlogPosts = async (limit = 3) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Return posts sorted by date (newest first) with limit
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit);
};

// Get blog post by slug
export const getBlogPostBySlug = async (slug) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  return blogPosts.find(post => post.slug === slug) || null;
};

// Get related posts
export const getRelatedPosts = async (postId, category, limit = 3) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 400));
  
  // Find posts in the same category, excluding the current post
  const related = blogPosts
    .filter(post => post.id !== postId && post.category === category)
    .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
    .slice(0, limit);
  
  // If we don't have enough related posts by category, add some recent posts
  if (related.length < limit) {
    const additionalPosts = blogPosts
      .filter(post => post.id !== postId && !related.some(r => r.id === post.id))
      .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
      .slice(0, limit - related.length);
    
    return [...related, ...additionalPosts];
  }
  
  return related;
};

// Add a comment
export const addComment = async (commentData) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Generate a unique ID
  const id = `c${Date.now()}`;
  
  // Create the new comment
  const newComment = {
    id,
    name: commentData.name,
    avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(commentData.name)}`,
    content: commentData.content,
    createdAt: commentData.createdAt || new Date().toISOString(),
    likes: 0,
    isAdmin: false
  };
  
  // In a real app, this would save to a database
  // For this mock, we're just returning the new comment
  return newComment;
};

// Delete a comment (admin only)
export const deleteComment = async (commentId) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // In a real app, this would delete from a database
  return { success: true };
};

// Report a comment
export const reportComment = async (commentId) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // In a real app, this would flag the comment for review
  return { success: true };
};

// Like a comment
export const likeComment = async (commentId) => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // In a real app, this would update the like count in a database
  return { success: true };
};
