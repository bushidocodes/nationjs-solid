import { useState, useEffect } from "react";
import {
  getSolidDataset,
  getThing,
  getStringNoLocale,
  getUrl,
  getUrlAll,
  getInteger,
} from "@inrupt/solid-client";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

const FOAF = "http://xmlns.com/foaf/0.1/";

function foaf(term) {
  return `${FOAF}${term}`;
}

export function useProfile(webId) {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!webId) return;

    let cancelled = false;
    setLoading(true);
    setError(null);

    const session = getDefaultSession();
    const fetchFn = session.info.isLoggedIn ? session.fetch : undefined;

    getSolidDataset(webId, { fetch: fetchFn })
      .then((dataset) => {
        if (cancelled) return;
        const thing = getThing(dataset, webId);
        if (!thing) {
          setProfile(null);
          return;
        }
        const age = getInteger(thing, foaf("age"));
        setProfile({
          name: getStringNoLocale(thing, foaf("name")),
          image: getUrl(thing, foaf("img")),
          firstName: getStringNoLocale(thing, foaf("firstName")),
          familyName: getStringNoLocale(thing, foaf("familyName")),
          nick: getStringNoLocale(thing, foaf("nick")),
          birthday: getStringNoLocale(thing, foaf("birthday")),
          age: age !== null ? String(age) : getStringNoLocale(thing, foaf("age")),
          gender: getStringNoLocale(thing, foaf("gender")),
          weblog: getUrlAll(thing, foaf("weblog")),
          homepage: getUrlAll(thing, foaf("homepage")),
          page: getUrlAll(thing, foaf("page")),
          publications: getUrlAll(thing, foaf("publications")),
          account: getUrlAll(thing, foaf("account")),
          friends: getUrlAll(thing, foaf("knows")),
        });
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [webId]);

  return { profile, loading, error };
}
