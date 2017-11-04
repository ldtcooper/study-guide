# Scaling

## Scaling your Web App 101
  Notes on [this article](https://blog.hartleybrody.com/scale-load/).
  - With enough users, a web app will slow down -- that's how you know you've hit scale.
  - Don't scale before you need to! Making an app work for lots of people at once comes at a cost.
    - Introduces complexity and abstraction, making app harder to think through.
    - Longer time to add new features
    - Testing gets harder
    - Bugs become more difficult to find

### Finding the Bottleneck
  - Usually, server load is over-utilizing one specific resource.
    - Memory(RAM), CPU, Network I/O, Disk I/O
  - Find the limited resource by monitoring resource use.
  - Add monitoring if there is none.
    - Many services (AWS, etc.) offer monitoring.
  - Look for spikes or flat tops (extended use of resource at capacity)
  - Check for all machines (DB machines, web app machines, etc.)

### Widening the Bottleneck
  - Always look for simplest solution
  - Good rule of thumb: find ways to reuse queries
    - Store information that is queried frequently or has been fetched recently
    - Don't resend

### Topology
  - Domain should point at a load balancer, not at a server
  - Load balancer sits between user and web servers, allowing easy horizontal scaling
  - Simple, one-time work that lets you scale a lot.
  - Doesn't add much complexity -- no reason not to do this.

### Caching
  - Look at DB query logs to see which queries are being made frequently or are taking a long time.

### Indices
  - Speed up DB lookups from O(n) to O(k)
  - Good to index rows that are accessed frequently.
  
