import getfile
import json
import pandas as pd
import matplotlib.pyplot as plt

data = getfile.getfile()
data_json = json.dumps(data)
df = pd.read_json(data_json)



campusdata = df.iloc[:, 0].values.tolist()
campusdata = [classloc[0]['description'] for classloc in campusdata]
unique = list(set(campusdata))

unique.remove('N/A')
unique = [value for value in unique if campusdata.count(value) != 0]
counts = [campusdata.count(unique[i]) for i in range(len(unique))]
unique[unique.index('O')] = "Online"

ax = plt.bar(unique, counts)
plt.bar_label(ax, label_type='center')
plt.show()
