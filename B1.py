def find(a,b):
    l=len(b)
    for i,j in enumerate(a):
        if a[i:i+l]==b:
            return i
def rfind(a,b):
    l=len(b)
    for i,j in enumerate(a):
        if a[i:i+l]==b:
            ans=i
    return ans
def count(a,b):
    l=len(b)
    for i,j in enumerate(a):
        if a[i:i+l]==b:
            c+=1
    return c
def first(a):
    return a.split()[0]
