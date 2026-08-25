# -*- coding: utf-8 -*-
import glob, re
correct = {'complete-guide','coverage-guide','destination-guides','multi-country-eurostar','network-comparison',
 'orange-travel-comparison','price-purchase-guide','provider-ranking','setup-dual-sim-number',
 'troubleshooting-guide','vs-physical-sim-roaming'}

print('=== ALL content files linking to /blog/france-esim-* with a NON-canonical target ===')
files = glob.glob('content/**/*.md', recursive=True) + glob.glob('content/**/*.html', recursive=True)
for f in files:
    try:
        raw = open(f, encoding='utf-8').read()
    except Exception:
        continue
    for m in re.finditer(r'\[([^\]]*)\]\((/blog/france-esim-[a-z0-9-]*/?)\)', raw):
        url = m.group(2)
        slug = re.sub(r'^/blog/','',url).rstrip('/').replace('france-esim-','',1)
        if slug not in correct:
            print('  %-55s -> %s' % (f, url))
    for m in re.finditer(r'href="(/blog/france-esim-[a-z0-9-]*/?)"', raw):
        url = m.group(1)
        slug = re.sub(r'^/blog/','',url).rstrip('/').replace('france-esim-','',1)
        if slug not in correct:
            print('  %-55s -> %s' % (f, url))

print()
print('=== the landing page content/en/france-esim.md -> its outbound links ===')
raw = open('content/en/france-esim.md', encoding='utf-8').read()
for m in re.finditer(r'\[([^\]]*)\]\(([^)]+)\)', raw):
    print('   [%s] -> %s' % (m.group(1)[:40], m.group(2)))
