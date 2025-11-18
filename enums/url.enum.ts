export enum BookingUrl {
    MORAN = 'https://www.booking.com/hotel/cz/moran.html?aid=304142&label=gen173nr-10CAMoOjj_AkgzWARoOogBAZgBM7gBB8gBDdgBA-gBAfgBAYgCAagCAbgCyvPryAbAAgHSAiQ5NjViMWIzZi1mYTA0LTQ4MDAtODBiMy1hMjVkNTE3YWE0MTTYAgHgAgE&sid=152d620d123fb10669a53cda8020fc39&all_sr_blocks=7700849_89027822_2_1_0&checkin=2026-06-01&checkout=2026-06-03&dest_id=-553173&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=11&highlighted_blocks=7700849_89027822_2_1_0&hpos=11&matching_block_id=7700849_89027822_2_1_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=7700849_89027822_2_1_0__28680&srepoch=1763405755&srpvid=5aba84d7b19a0633&type=total&ucfs=1&',
    HILTON = 'https://www.booking.com/hotel/cz/hilton-prague.html?aid=304142&label=gen173nr-10CAMoOjj_AkgzWARoOogBAZgBM7gBB8gBDdgBA-gBAfgBAYgCAagCAbgCyvPryAbAAgHSAiQ5NjViMWIzZi1mYTA0LTQ4MDAtODBiMy1hMjVkNTE3YWE0MTTYAgHgAgE&sid=152d620d123fb10669a53cda8020fc39&all_sr_blocks=7756013_94291607_2_34_0&checkin=2026-06-01&checkout=2026-06-03&dest_id=-553173&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=7756013_94291607_2_34_0&hpos=1&matching_block_id=7756013_94291607_2_34_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=7756013_94291607_2_34_0__1067200&srepoch=1763405618&srpvid=5aba84d7b19a0633&type=total&ucfs=1&',
    GRAND = 'https://www.booking.com/hotel/cz/corinthiatowers.html?aid=304142&label=gen173nr-10CAMoOjj_AkgzWARoOogBAZgBM7gBB8gBDdgBA-gBAfgBAYgCAagCAbgCyvPryAbAAgHSAiQ5NjViMWIzZi1mYTA0LTQ4MDAtODBiMy1hMjVkNTE3YWE0MTTYAgHgAgE&sid=152d620d123fb10669a53cda8020fc39&all_sr_blocks=7702778_91461844_2_0_0_543584&checkin=2026-06-01&checkout=2026-06-03&dest_id=-553173&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=12&highlighted_blocks=7702778_91461844_2_0_0_543584&hpos=12&matching_block_id=7702778_91461844_2_0_0_543584&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=7702778_91461844_2_0_0_543584_40026&srepoch=1763405646&srpvid=5aba84d7b19a0633&type=total&ucfs=1&',
    METROPOLITAN = 'https://www.booking.com/hotel/cz/rubicon-old-town.html?aid=304142&label=gen173nr-10CAMoOjj_AkgzWARoOogBAZgBM7gBB8gBDdgBA-gBAfgBAYgCAagCAbgCyvPryAbAAgHSAiQ5NjViMWIzZi1mYTA0LTQ4MDAtODBiMy1hMjVkNTE3YWE0MTTYAgHgAgE&sid=152d620d123fb10669a53cda8020fc39&all_sr_blocks=18565830_351254468_2_2_0_769699&checkin=2026-06-01&checkout=2026-06-03&dest_id=-553173&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=24&highlighted_blocks=18565830_351254468_2_2_0_769699&hpos=24&matching_block_id=18565830_351254468_2_2_0_769699&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=18565830_351254468_2_2_0_769699_31400&srepoch=1763405674&srpvid=5aba84d7b19a0633&type=total&ucfs=1&',
  }
  
  export enum UnpayableBookingUrl {
    FY8KPF = 'https://www.booking.com/Share-FY8kPf',
  }  
  
  export enum UnsupportedLink {
    INVALID_TEXT = 'notalink',
    RANDOM_URL = 'https://google.com',
    BROKEN_BOOKING = 'https://www.booking.com/hotel/cz/',
  }

  export const CheckoutUrlPattern = {
    CZ: /\/objednavka\/rezervace\/[0-9a-fA-F-]{36}$/,
    PL: /\/zamowienie\/nocleg\/[0-9a-fA-F-]{36}$/,
  };
  