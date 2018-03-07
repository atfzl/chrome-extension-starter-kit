import * as xhook from 'xhook';

console.log(new Date());

xhook.after((request: any, response: any) => {
  if (
    request.url ===
    'https://search.paytm.com/popularsearch?channel=web&child_site_id=1&site_id=1&version=2&cat_tree=1'
  ) {
    response.text = JSON.stringify({
      app_display_count: 15,
      keywords: [
        { text: 'Bazaaru' },
        { text: 'Super Cashback Sale' },
        { text: 'Dry Fruits' },
        { text: 'Diaper & Pants' },
        { text: 'Lipsticks' },
        { text: 'Soaps And Make Up Products' },
        { text: 'Exam Warriors - A Book By PM Modi' },
        { text: 'Big Bazaar Voucher' },
        { text: 'Microsoft Office 2016' },
        { text: 'Iball Mouse' },
      ],
    });

    window.postMessage(
      { source: 'api-mock', payload: JSON.stringify(response.text) },
      '*',
    );
  }
});
