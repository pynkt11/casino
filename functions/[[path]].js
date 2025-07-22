export async function onRequest(context) {
  const redirects = {
    "1-reel-classic-legendarnyi-slot-ot-netent-vypushchennyi-v-2023-godu": "https://t.me/s/Eldorado_promoKey",
    "1-reel-egypt-original-nyi-slot-ot-microgaming-vyshedshii-v-2020-godu": "https://t.me/s/Parimatch_promoKey",
    "1-reel-golden-piggy-neobychnyi-onlain-slot-ot-microgaming-vyshedshii-v-2022-godu": "https://t.me/s/Futuriti_promocode",
    "1-reel-in-wonderland-izvestnyi-onlain-avtomat-ot-play-n-go-vypushchennyi-v-2022-godu": "https://t.me/s/BetItAllcode",
    "1-reel-jarptitsa-unleashed-topovyi-onlain-slot-ot-yggdrasil-vyshedshii-v-2021-godu": "https://t.me/s/SkyKings_promo",
    "1-reel-joker-topovyi-slot-ot-microgaming-vyshedshii-v-2021-godu": "https://t.me/s/Pinco_promocodebsvpq",
    "1-reel-majestic-wild-buffalo-topovyi-slot-ot-pragmatic-play-vypushchennyi-v-2022-godu": "https://t.me/s/Grizzly_promoBear",
    "1-reel-xmas-stil-nyi-slot-ot-pragmatic-play-vypushchennyi-v-2024-godu": "https://t.me/s/Irwin_promoKey",
    "zorro-wild-heart-bgaming-novyi-igrovoi-avtomat-ot-play-n-go-vypushchennyi-v-2022-god": "https://t.me/s/dicevaultteam"
  };

  let path = context.params.path || "";
  path = path.replace(/\.html$/, "");

  if (redirects[path]) {
    return Response.redirect(redirects[path], 301);
  }

  return new Response("Not found", { status: 404 });
}

