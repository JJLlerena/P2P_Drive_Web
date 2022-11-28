

export default function Home() {
    return(
        <div className="Home flex ">
              <div className="grid grid-cols-1 gap-6 mb-6 h-20 lg:grid-cols-3">
                  <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                      
                      <div className="mt-1 text-3xl font-semibold text-gray-900">
                          Upload Files
                      </div>
                  </div>
                  <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                      <div className="mt-1 text-3xl font-semibold text-gray-900">
                          Download Files
                      </div>
                  </div>
                  <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                      <div className="mt-1 text-3xl font-semibold text-gray-900">
                      Track pinned files
                      </div>
                  </div>
              </div>
        </div>
    );
}