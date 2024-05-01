import React from 'react'

export default function LandingServicesList() {
    return (
        <div>
            <div className='text-center fs-2 fw-light my-5 '>
                WASHING SERVICES
            </div>
            <div className='mx-5'>

                <nav>
                    <div class="nav nav-tabs d-flex justify-content-center" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-carwash-tab" data-bs-toggle="tab" data-bs-target="#nav-carwash" type="button" role="tab" aria-controls="nav-carwash" aria-selected="true">
                            Car Wash
                        </button>
                        <button class="nav-link" id="nav-detailing-tab" data-bs-toggle="tab" data-bs-target="#nav-detailing" type="button" role="tab" aria-controls="nav-detailing" aria-selected="false">
                            Detailing
                        </button>
                        <button class="nav-link" id="nav-buffing-tab" data-bs-toggle="tab" data-bs-target="#nav-buffing" type="button" role="tab" aria-controls="nav-buffing" aria-selected="false">
                            Buffing
                        </button>
                        <button class="nav-link" id="nav-waxing-tab" data-bs-toggle="tab" data-bs-target="#nav-waxing" type="button" role="tab" aria-controls="nav-waxing" aria-selected="false">
                            Waxing
                        </button>
                        <button class="nav-link" id="nav-deepclean-tab" data-bs-toggle="tab" data-bs-target="#nav-deepclean" type="button" role="tab" aria-controls="nav-deepclean" aria-selected="false">
                            Deep Clean
                        </button>
                    </div>
                </nav>

                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-carwash" role="tabpanel" aria-labelledby="nav-carwash-tab">
                    Car Wash
                    </div>
                    <div class="tab-pane fade" id="nav-detailing" role="tabpanel" aria-labelledby="nav-detailing-tab">
                    Detailing
                    </div>
                    <div class="tab-pane fade" id="nav-buffing" role="tabpanel" aria-labelledby="nav-buffing-tab">
                    Buffing
                    </div>
                    <div class="tab-pane fade" id="nav-waxing" role="tabpanel" aria-labelledby="nav-waxing-tab">
                    Waxing
                    </div>
                    <div class="tab-pane fade" id="nav-deepclean" role="tabpanel" aria-labelledby="nav-deepclean-tab">
                    Deep Clean
                    </div>
                </div>
            </div>

        </div>
    )
}
