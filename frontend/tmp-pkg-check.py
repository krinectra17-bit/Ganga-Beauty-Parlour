import json
with open('package.json', 'r', encoding='utf-8') as f:
    data = json.load(f)
text = json.dumps(data)
print('caniuse-lite' in text)
print('baseline-browser-mapping' in text)
print(data.get('devDependencies', {}).get('caniuse-lite'))
print(data.get('devDependencies', {}).get('baseline-browser-mapping'))
