import { useState, useEffect } from "react";

const SEO_KNOWLEDGE_BASE = `
Google SEO Starter Guide - Complete Knowledge Base:
 
1. HOW GOOGLE SEARCH WORKS: Google uses automated crawlers to find and index web pages. Most sites are discovered automatically through links. Changes take hours to months to appear in results.
 
2. HELP GOOGLE FIND YOUR CONTENT: Use site: operator to check indexing. Google finds pages through links from already-crawled pages. Submit a sitemap for better crawl coverage. Ensure Google can access CSS and JS resources.
 
3. ORGANIZE YOUR SITE STRUCTURE: Create a naturally flowing hierarchy. Use breadcrumb navigation. Create a sitemap file with links to important pages. Avoid deep nesting of pages.
 
4. TITLE LINKS AND TITLES: Write unique, accurate page titles. Use brief but descriptive titles. Avoid generic titles like Home. Include your site name if helpful. Avoid keyword stuffing. Keep titles concise.
 
5. META DESCRIPTIONS: Write unique meta descriptions for each page. Use them as advertising copy to attract clicks. Include important keywords naturally. Avoid generic descriptions. Optimal length: 150-160 characters.
 
6. HEADING TAGS H1-H6: Use headings to structure content hierarchically. Use H1 for main topic, H2-H6 for subtopics. Do not use headings for styling purposes only. Make headings descriptive.
 
7. STRUCTURED DATA SCHEMA MARKUP: Add structured data to help Google understand your content. Types: Article, Product, Recipe, FAQ, Event, Job Posting, Review, Local Business, etc. Use JSON-LD format. Test with Rich Results Test tool.
 
8. URL STRUCTURE: Create simple, readable URLs. Use words over numbers. Use hyphens not underscores. Avoid lengthy URLs. Do not use excessive keywords in URLs. Use a consistent structure.
 
9. NAVIGATION AND INTERNAL LINKING: Good navigation helps users and Google. Include a homepage link on every page. Create natural anchor text for links. Use descriptive text instead of click here. Avoid excessive links on one page.
 
10. CONTENT QUALITY: Create helpful, reliable, people-first content. Write for users, not search engines. Demonstrate E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness). Avoid thin, duplicate, or AI-generated low-quality content.
 
11. KEYWORD RESEARCH AND STRATEGY: Think like your audience. Use natural language variations. Target question-based queries. Use tools like Google Search Console, Google Trends. Focus on long-tail keywords.
 
12. IMAGE OPTIMIZATION: Use descriptive alt text for all images. Use short, descriptive filenames. Use standard formats (JPEG, PNG, WebP). Compress images for faster loading. Serve images in next-gen formats.
 
13. CORE WEB VITALS AND PAGE EXPERIENCE: Optimize LCP (Largest Contentful Paint) under 2.5s. Improve FID/INP (interaction delays). Minimize CLS (layout shifts). Use HTTPS. Avoid intrusive interstitials/popups.
 
14. MOBILE-FIRST INDEXING: Google primarily uses mobile version for indexing. Use responsive design. Ensure content parity between mobile and desktop. Avoid mobile-only errors. Test with Mobile-Friendly Test.
 
15. PAGE SPEED OPTIMIZATION: Compress images. Minimize CSS/JS. Use browser caching. Enable server compression. Use a CDN. Reduce server response time. Remove render-blocking resources.
 
16. BACKLINKS AND LINK BUILDING: Earn links naturally through great content. Guest posting on reputable sites. Create linkable assets (infographics, research, tools). Avoid paid links or link schemes. Monitor with Google Search Console.
 
17. GOOGLE SEARCH CONSOLE: Set up Search Console for every site. Monitor coverage errors, index status, Core Web Vitals, manual actions. Use Performance report for queries and clicks. Submit sitemaps through GSC.
 
18. ROBOTS TXT: Control which pages Google crawls. Place at root of domain. Use Disallow to block sections. Do not use robots.txt to block indexing - use noindex meta tag instead.
 
19. CANONICALIZATION: Use rel=canonical to indicate preferred URL version. Prevents duplicate content issues. Handle www vs non-www consistently. Handle trailing slashes consistently. Use 301 redirects for moved content.
 
20. FEATURED SNIPPETS OPTIMIZATION: Structure content with clear questions and direct answers. Use numbered lists for processes. Use tables for comparisons. Keep answers concise (40-60 words). Use H2/H3 for questions.
 
21. LOCAL SEO: Set up Google Business Profile. Keep NAP (Name, Address, Phone) consistent. Get local citations. Earn local reviews. Use local schema markup. Target local keywords.
 
22. HTTPS AND SECURITY: HTTPS is a ranking signal. Get an SSL certificate. Fix mixed content issues. Prevent malware. Monitor security in GSC. Protect user data.
 
23. DUPLICATE CONTENT: Avoid having the same content on multiple URLs. Use canonical tags. Set preferred domain in GSC. Handle parameters properly. Consolidate similar pages.
 
24. CONTENT FRESHNESS: Update old content regularly. Add publication/update dates. Create evergreen content. Monitor content performance over time. Refresh declining pages.
 
25. ANCHOR TEXT OPTIMIZATION: Use descriptive anchor text for links. Vary anchor text naturally. Avoid exact-match anchor text overuse. Ensure link text is relevant to destination page.
 
26. SITEMAP OPTIMIZATION: Include all important pages. Update sitemap when adding new content. Submit to GSC. Use separate sitemaps for images, video, news. Keep under 50MB/50,000 URLs per file.
 
27. 301 REDIRECTS: Use 301 for permanent moves. Chain redirects hurt performance. Update internal links after redirects. Monitor redirect chains in GSC. Avoid redirect loops.
 
28. JAVASCRIPT SEO: Ensure JS-rendered content is indexable. Use server-side or static rendering when possible. Test with URL Inspection Tool. Avoid important content in JS-only rendered sections.
 
29. VIDEO SEO: Add video schema markup. Create video sitemaps. Use descriptive titles and descriptions. Host on YouTube for additional visibility. Use transcripts for accessibility and crawlability.
 
30. VOICE SEARCH OPTIMIZATION: Target conversational, question-based queries. Optimize for featured snippets. Ensure fast page load. Use FAQ schema. Focus on local queries for voice.
 
31. E-E-A-T: Demonstrate real experience with topics. Show author credentials and bios. Get cited by authoritative sources. Display trust signals like reviews, certifications, and contact info.
 
32. GOOGLE DISCOVER: Publish engaging, timely content. Use high-quality images (min 1200px wide). Enable large image in GSC. Focus on trending topics. Maintain E-E-A-T.
 
33. PAGINATION SEO: Handle paginated content correctly. Consider infinite scroll implications. Ensure paginated pages are crawlable. Use canonical when appropriate.
 
34. INTERNATIONAL SEO HREFLANG: Use hreflang tags for multilingual sites. Target correct country and language combinations. Host content locally when possible. Translate and localize content.
 
35. CRAWL BUDGET OPTIMIZATION: Remove low-value pages. Fix crawl errors. Improve internal linking. Block unimportant sections in robots.txt. Optimize for large sites with many pages.
 
36. SEARCH CONSOLE PERFORMANCE REPORT: Track clicks, impressions, CTR, and position. Filter by query, page, country, device. Identify opportunities to improve CTR. Find pages dropping in rankings.
 
37. GOOGLE ANALYTICS AND GSC INTEGRATION: Combine GA and GSC data for full picture. Track organic traffic by landing page. Measure engagement metrics for SEO pages. Set up goals for conversions from organic.
 
38. CONTENT SILOS AND TOPIC CLUSTERS: Group related content together. Create pillar pages for broad topics. Link cluster content to pillar page. Build topical authority. Improves crawl efficiency.
 
39. SITE ARCHITECTURE: Keep important pages within 3 clicks of homepage. Use logical hierarchy. Flatten site structure where possible. Use breadcrumbs for deep pages.
 
40. MONITORING AND AUDITING: Regular SEO audits identify issues. Monitor rankings with tools. Track Core Web Vitals. Review GSC for errors weekly. Monitor backlink profile monthly.
`;

const getTodayKey = () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
};

const STORAGE_KEY = "seo_used_topics";
const DAILY_KEY = "seo_daily_topics";

export default function SEOTopicGenerator() {
    const [topics, setTopics] = useState(null);
    const [loading, setLoading] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [carousel, setCarousel] = useState(null);
    const [carouselLoading, setCarouselLoading] = useState(false);
    const [usedTopics, setUsedTopics] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [copyMsg, setCopyMsg] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        loadStoredData();
    }, []);

    // Uses localStorage - works on local PC and Render
    const loadStoredData = () => {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            const used = raw ? JSON.parse(raw) : [];
            setUsedTopics(used);

            const dailyRaw = localStorage.getItem(DAILY_KEY + "_" + getTodayKey());
            if (dailyRaw) {
                setTopics(JSON.parse(dailyRaw));
            }
        } catch (e) {
            setUsedTopics([]);
        }
    };

    const generateTopics = async () => {
        setLoading(true);
        setError("");
        setSelectedTopic(null);
        setCarousel(null);

        const usedList =
            usedTopics.length > 0
                ? `\nALREADY USED TOPICS (DO NOT REPEAT THESE): ${usedTopics.join(", ")}`
                : "";

        try {
            // Calls your own backend - API key stays secret on server
            const API_URL = (import.meta.env.VITE_API_URL || "") + "/api/claude";
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    max_tokens: 1000,
                    messages: [
                        {
                            role: "user",
                            content:
                                "You are an SEO expert content strategist. Based on Google's official SEO knowledge base below, generate exactly 5 unique, actionable SEO topics for LinkedIn carousel posts targeting SEO marketers and digital marketers.\n\n" +
                                SEO_KNOWLEDGE_BASE +
                                "\n" +
                                usedList +
                                "\n\nRequirements:\n- Each topic must be UNIQUE and not previously used\n- Each topic must be highly actionable and specific\n- Each topic must help SEO marketers improve their campaigns\n- Focus on practical, implementable tips\n\nRespond ONLY with a valid JSON array of exactly 5 objects. No preamble, no markdown, no explanation. Just the JSON array:\n[\n  {\n    \"id\": \"unique_slug\",\n    \"title\": \"Carousel topic title (max 8 words)\",\n    \"category\": \"category name\",\n    \"hook\": \"One compelling sentence that grabs attention\",\n    \"why\": \"Why this matters for SEO campaigns (1 sentence)\",\n    \"difficulty\": \"Beginner|Intermediate|Advanced\",\n    \"impact\": \"High|Medium|Quick Win\"\n  }\n]",
                        },
                    ],
                }),
            });

            const data = await response.json();
            const text = data.content.map((i) => i.text || "").join("");
            const clean = text.replace(/```json|```/g, "").trim();
            const parsed = JSON.parse(clean);

            setTopics(parsed);

            const newUsed = [...usedTopics, ...parsed.map((t) => t.id)];
            setUsedTopics(newUsed);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(newUsed));
            localStorage.setItem(DAILY_KEY + "_" + getTodayKey(), JSON.stringify(parsed));
        } catch (e) {
            setError("Failed to generate topics. Please try again.");
        }
        setLoading(false);
    };

    const generateCarousel = async (topic) => {
        setSelectedTopic(topic);
        setCarouselLoading(true);
        setCarousel(null);
        setActiveSlide(0);

        try {
            const API_URL = (import.meta.env.VITE_API_URL || "") + "/api/claude";
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    max_tokens: 1000,
                    messages: [
                        {
                            role: "user",
                            content:
                                "You are a LinkedIn content expert. Create a 6-slide LinkedIn carousel for SEO marketers about this topic:\n\nTopic: \"" +
                                topic.title +
                                "\"\nHook: \"" +
                                topic.hook +
                                "\"\nCategory: " +
                                topic.category +
                                "\nDifficulty: " +
                                topic.difficulty +
                                "\n\nBased on Google's SEO knowledge base, write a complete 6-slide carousel.\n\nRespond ONLY with valid JSON. No preamble:\n{\n  \"slide1\": { \"label\": \"Hook\", \"headline\": \"Bold attention-grabbing headline (max 8 words)\", \"body\": \"1-2 sentences that create curiosity or state the problem\", \"emoji\": \"single relevant emoji\" },\n  \"slide2\": { \"label\": \"The Problem\", \"headline\": \"What most SEO marketers get wrong\", \"body\": \"2-3 sentences describing the common mistake or gap\", \"emoji\": \"single emoji\" },\n  \"slide3\": { \"label\": \"Tip #1\", \"headline\": \"First actionable tip title\", \"body\": \"2-3 sentences with specific, actionable advice\", \"emoji\": \"single emoji\" },\n  \"slide4\": { \"label\": \"Tip #2\", \"headline\": \"Second actionable tip title\", \"body\": \"2-3 sentences with specific, actionable advice\", \"emoji\": \"single emoji\" },\n  \"slide5\": { \"label\": \"Tip #3\", \"headline\": \"Third actionable tip title\", \"body\": \"2-3 sentences with specific, actionable advice\", \"emoji\": \"single emoji\" },\n  \"slide6\": { \"label\": \"Action Step\", \"headline\": \"Start doing this today\", \"body\": \"One clear, specific action step + engagement CTA for LinkedIn\", \"emoji\": \"single emoji\" }\n}",
                        },
                    ],
                }),
            });

            const data = await response.json();
            const text = data.content.map((i) => i.text || "").join("");
            const clean = text.replace(/```json|```/g, "").trim();
            setCarousel(JSON.parse(clean));
        } catch (e) {
            setError("Failed to generate carousel. Please try again.");
        }
        setCarouselLoading(false);
    };

    const copySlide = (slide) => {
        const text = slide.emoji + " " + slide.headline + "\n\n" + slide.body;
        navigator.clipboard.writeText(text);
        setCopyMsg("Copied!");
        setTimeout(() => setCopyMsg(""), 2000);
    };

    const copyAllSlides = () => {
        const slides = Object.values(carousel);
        const text = slides
            .map((s, i) => "--- Slide " + (i + 1) + ": " + s.label + " ---\n" + s.emoji + " " + s.headline + "\n\n" + s.body)
            .join("\n\n");
        navigator.clipboard.writeText(text);
        setCopyMsg("All slides copied!");
        setTimeout(() => setCopyMsg(""), 2000);
    };

    const resetUsedTopics = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        setUsedTopics([]);
        setTopics(null);
        setSelectedTopic(null);
        setCarousel(null);
    };

    const difficultyColor = (d) =>
    ({
        Beginner: { bg: "#EAF3DE", color: "#3B6D11" },
        Intermediate: { bg: "#FAEEDA", color: "#854F0B" },
        Advanced: { bg: "#FCEBEB", color: "#A32D2D" },
    }[d] || { bg: "#E6F1FB", color: "#185FA5" });

    const impactColor = (i) =>
    ({
        High: { bg: "#FCEBEB", color: "#A32D2D" },
        Medium: { bg: "#FAEEDA", color: "#854F0B" },
        "Quick Win": { bg: "#EAF3DE", color: "#3B6D11" },
    }[i] || { bg: "#E1F5EE", color: "#0F6E56" });

    const slideKeys = carousel ? Object.keys(carousel) : [];
    const currentSlide = carousel ? carousel[slideKeys[activeSlide]] : null;

    return (
        <div style={{ fontFamily: "system-ui, sans-serif", padding: "1.5rem", maxWidth: 720, margin: "0 auto" }}>

            {/* Header */}
            <div style={{ marginBottom: "1.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
                    <div>
                        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 600, color: "#111" }}>
                            SEO Daily Topic Generator
                        </h2>
                        <p style={{ margin: "4px 0 0", fontSize: 13, color: "#666" }}>
                            5 fresh SEO topics daily · LinkedIn carousel ready · No repeats
                        </p>
                    </div>
                    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        {usedTopics.length > 0 && (
                            <span style={{ fontSize: 12, color: "#666", background: "#f5f5f5", padding: "4px 10px", borderRadius: 6, border: "1px solid #e0e0e0" }}>
                                {usedTopics.length} topics used
                            </span>
                        )}
                        {usedTopics.length > 0 && (
                            <button
                                onClick={resetUsedTopics}
                                style={{ fontSize: 12, padding: "4px 12px", cursor: "pointer", borderRadius: 6, border: "1px solid #e0e0e0", background: "#fff", color: "#555" }}
                            >
                                Reset history
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Generate Button */}
            {!topics && !loading && (
                <div style={{ textAlign: "center", padding: "2rem 0" }}>
                    <div style={{ marginBottom: 16, padding: "1rem", background: "#f8f9fa", borderRadius: 10, border: "1px solid #e8e8e8", fontSize: 13, color: "#555" }}>
                        Powered by Google's official SEO Starter Guide — no repeated topics across days
                    </div>
                    <button
                        onClick={generateTopics}
                        style={{ fontSize: 15, padding: "12px 32px", fontWeight: 600, background: "#185FA5", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer" }}
                    >
                        Generate Today's 5 SEO Topics
                    </button>
                </div>
            )}

            {/* Loading */}
            {loading && (
                <div style={{ textAlign: "center", padding: "3rem 0", color: "#666" }}>
                    <p style={{ margin: 0, fontSize: 14 }}>Generating fresh SEO topics from Google's knowledge base...</p>
                </div>
            )}

            {error && (
                <p style={{ color: "#c00", fontSize: 13, margin: "8px 0", padding: "8px 12px", background: "#fff0f0", borderRadius: 6, border: "1px solid #fcc" }}>
                    {error}
                </p>
            )}

            {/* Topics List */}
            {topics && (
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                        <p style={{ margin: 0, fontSize: 13, color: "#666" }}>
                            {getTodayKey()} — Click a topic to generate your carousel
                        </p>
                        <button
                            onClick={generateTopics}
                            style={{ fontSize: 12, padding: "4px 12px", cursor: "pointer", borderRadius: 6, border: "1px solid #e0e0e0", background: "#fff", color: "#555" }}
                        >
                            Regenerate
                        </button>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                        {topics.map((topic, idx) => (
                            <div
                                key={topic.id}
                                onClick={() => generateCarousel(topic)}
                                style={{
                                    background: selectedTopic?.id === topic.id ? "#f0f6ff" : "#fff",
                                    border: selectedTopic?.id === topic.id ? "2px solid #185FA5" : "1px solid #e0e0e0",
                                    borderRadius: 10,
                                    padding: "14px 16px",
                                    cursor: "pointer",
                                }}
                            >
                                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                                    <div style={{ minWidth: 28, height: 28, borderRadius: "50%", background: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 600, color: "#555", flexShrink: 0 }}>
                                        {idx + 1}
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontSize: 14, fontWeight: 600, color: "#111", marginBottom: 4 }}>{topic.title}</div>
                                        <p style={{ margin: "0 0 8px", fontSize: 13, color: "#555", lineHeight: 1.5 }}>{topic.hook}</p>
                                        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                                            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: difficultyColor(topic.difficulty).bg, color: difficultyColor(topic.difficulty).color, fontWeight: 600 }}>
                                                {topic.difficulty}
                                            </span>
                                            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: impactColor(topic.impact).bg, color: impactColor(topic.impact).color, fontWeight: 600 }}>
                                                {topic.impact} impact
                                            </span>
                                            <span style={{ fontSize: 11, padding: "2px 8px", borderRadius: 4, background: "#f0f0f0", color: "#555", border: "1px solid #e0e0e0" }}>
                                                {topic.category}
                                            </span>
                                        </div>
                                    </div>
                                    <span style={{ fontSize: 18, color: "#999", flexShrink: 0 }}>›</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Carousel Loading */}
            {carouselLoading && (
                <div style={{ textAlign: "center", padding: "2.5rem 0", color: "#666", borderTop: "1px solid #eee" }}>
                    <p style={{ margin: 0, fontSize: 13 }}>Building your LinkedIn carousel for "{selectedTopic?.title}"...</p>
                </div>
            )}

            {/* Carousel Preview */}
            {carousel && selectedTopic && !carouselLoading && (
                <div style={{ borderTop: "1px solid #eee", paddingTop: 20 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                        <div>
                            <h3 style={{ margin: 0, fontSize: 15, fontWeight: 600, color: "#111" }}>
                                LinkedIn Carousel — {selectedTopic.title}
                            </h3>
                            <p style={{ margin: "2px 0 0", fontSize: 12, color: "#666" }}>6 slides · Click tabs to preview</p>
                        </div>
                        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                            {copyMsg && <span style={{ fontSize: 12, color: "#2d7a2d", fontWeight: 600 }}>{copyMsg}</span>}
                            <button
                                onClick={copyAllSlides}
                                style={{ fontSize: 12, padding: "4px 12px", cursor: "pointer", borderRadius: 6, border: "1px solid #e0e0e0", background: "#fff" }}
                            >
                                Copy all slides
                            </button>
                        </div>
                    </div>

                    {/* Slide Tabs */}
                    <div style={{ display: "flex", gap: 6, marginBottom: 14, overflowX: "auto", paddingBottom: 4 }}>
                        {slideKeys.map((key, i) => (
                            <button
                                key={key}
                                onClick={() => setActiveSlide(i)}
                                style={{
                                    fontSize: 11, padding: "5px 12px", whiteSpace: "nowrap", cursor: "pointer",
                                    background: activeSlide === i ? "#185FA5" : "#fff",
                                    color: activeSlide === i ? "#fff" : "#555",
                                    border: activeSlide === i ? "1px solid #185FA5" : "1px solid #e0e0e0",
                                    borderRadius: 6,
                                }}
                            >
                                {i + 1}. {carousel[key].label}
                            </button>
                        ))}
                    </div>

                    {/* Active Slide Preview */}
                    {currentSlide && (
                        <div
                            style={{
                                background: "linear-gradient(135deg, #0A2540 0%, #185FA5 100%)",
                                borderRadius: 12, padding: "2rem", marginBottom: 12, minHeight: 200,
                                display: "flex", flexDirection: "column", justifyContent: "space-between",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.6)", fontWeight: 500, letterSpacing: 1, textTransform: "uppercase" }}>
                                    Slide {activeSlide + 1} of 6 · {currentSlide.label}
                                </span>
                                <span style={{ fontSize: 24 }}>{currentSlide.emoji}</span>
                            </div>
                            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", padding: "1rem 0" }}>
                                <h3 style={{ margin: "0 0 12px", fontSize: 20, fontWeight: 600, color: "#fff", lineHeight: 1.3 }}>
                                    {currentSlide.headline}
                                </h3>
                                <p style={{ margin: 0, fontSize: 14, color: "rgba(255,255,255,0.82)", lineHeight: 1.6 }}>
                                    {currentSlide.body}
                                </p>
                            </div>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <span style={{ fontSize: 11, color: "rgba(255,255,255,0.4)" }}>
                                    #{selectedTopic.category.replace(/\s/g, "")} #SEO #DigitalMarketing
                                </span>
                                <button
                                    onClick={() => copySlide(currentSlide)}
                                    style={{ fontSize: 11, padding: "4px 12px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", borderRadius: 6, cursor: "pointer" }}
                                >
                                    Copy slide
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Navigation */}
                    <div style={{ display: "flex", gap: 8, justifyContent: "center", marginBottom: 20 }}>
                        <button
                            onClick={() => setActiveSlide(Math.max(0, activeSlide - 1))}
                            disabled={activeSlide === 0}
                            style={{ fontSize: 13, padding: "6px 16px", cursor: "pointer", borderRadius: 6, border: "1px solid #e0e0e0", background: "#fff", opacity: activeSlide === 0 ? 0.4 : 1 }}
                        >
                            Prev
                        </button>
                        <button
                            onClick={() => setActiveSlide(Math.min(slideKeys.length - 1, activeSlide + 1))}
                            disabled={activeSlide === slideKeys.length - 1}
                            style={{ fontSize: 13, padding: "6px 16px", cursor: "pointer", borderRadius: 6, border: "1px solid #e0e0e0", background: "#fff", opacity: activeSlide === slideKeys.length - 1 ? 0.4 : 1 }}
                        >
                            Next
                        </button>
                    </div>

                    {/* All Slides Text */}
                    <div style={{ borderTop: "1px solid #eee", paddingTop: 16 }}>
                        <p style={{ fontSize: 12, color: "#666", margin: "0 0 10px" }}>
                            All slides — ready to paste into Canva, Adobe Express, or LinkedIn
                        </p>
                        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                            {slideKeys.map((key, i) => {
                                const s = carousel[key];
                                return (
                                    <div key={key} style={{ background: "#f8f9fa", borderRadius: 8, padding: "10px 14px", border: "1px solid #e8e8e8", fontSize: 13 }}>
                                        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
                                            <span style={{ fontSize: 11, color: "#999", fontWeight: 600 }}>Slide {i + 1}</span>
                                            <span style={{ fontSize: 11, color: "#ccc" }}>·</span>
                                            <span style={{ fontSize: 11, color: "#999" }}>{s.label}</span>
                                        </div>
                                        <div style={{ fontWeight: 600, color: "#111" }}>{s.emoji} {s.headline}</div>
                                        <p style={{ margin: "4px 0 0", fontSize: 12, color: "#555", lineHeight: 1.5 }}>{s.body}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
