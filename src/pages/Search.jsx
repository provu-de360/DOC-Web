import { useEffect, useState, useMemo } from "react";
import { Search as SearchIcon } from "lucide-react";
import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import SectionTitle from "../components/SectionTitle";
import ScrollReveal from "../components/ScrollReveal";
import rides from "../data/rides";
import events from "../data/events";
import { navLinks } from "../data/siteData";

// Simple frontend-only search across rides, events and pages.
// It filters the local data files as you type — no backend needed.
function Search() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    document.title = "Search | Ducati Official Club";
  }, []);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const rideResults = rides
      .filter((r) => r.title.toLowerCase().includes(q) || r.location.toLowerCase().includes(q))
      .map((r) => ({ type: "Ride", title: r.title, path: `/rides/${r.id}` }));

    const eventResults = events
      .filter((e) => e.title.toLowerCase().includes(q) || e.location.toLowerCase().includes(q))
      .map((e) => ({ type: "Event", title: e.title, path: `/events/${e.id}` }));

    const pageResults = navLinks
      .filter((n) => n.name.toLowerCase().includes(q))
      .map((n) => ({ type: "Page", title: n.name, path: n.path }));

    return [...rideResults, ...eventResults, ...pageResults];
  }, [query]);

  return (
    <PageTransition>
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <SectionTitle eyebrow="Find Anything" title="SEARCH" align="center" />

          <div className="search-input-wrap">
            <SearchIcon size={20} color="var(--gray)" />
            <input
              type="text"
              placeholder="Search rides, events, or pages..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>

          <div style={{ marginTop: 32 }}>
            {query && results.length === 0 && (
              <p className="text-center">No results found for "{query}".</p>
            )}

            {results.map((result, i) => (
              <ScrollReveal key={`${result.type}-${result.title}`} delay={i * 0.05}>
                <Link
                  to={result.path}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "18px 0",
                    borderBottom: "1px solid #eee",
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{result.title}</span>
                  <span className="eyebrow" style={{ marginBottom: 0 }}>{result.type}</span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Search;
