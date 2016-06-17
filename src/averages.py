#!/usr/bin/env python3

class Accumulator:
  def __init__(self,ranges=(1,12)):
    self.data=[]
    self.ranges=ranges
  def add(self,value=0,label=None):
    if label is None:
      label=len(self.data)
    averages=[]
    for range in self.ranges:
      valueset=[]
      if 1-range < -1:
        valueset += [e[1] for e in self.data[1-range:]]
      valueset.append(value)
      averages.append((1.0*sum(valueset))/len(valueset))
    self.data.append([label,value]+averages)
    print(self.data[-1])

def main():
  pass



if __name__ == "__main__":
  main()